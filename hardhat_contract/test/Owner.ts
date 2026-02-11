import { expect } from "chai";
import { ethers } from "hardhat";
import type { Signer } from "ethers";
import type { Owner } from "../typechain-types";

describe("Owner", function () {
  async function deployFixture(): Promise<{
    ownerContract: Owner;
    deployer: Signer;
    alice: Signer;
    bob: Signer;
    deployerAddr: string;
    aliceAddr: string;
    bobAddr: string;
  }> {
    const [deployer, alice, bob] = await ethers.getSigners();

    const deployerAddr = await deployer.getAddress();
    const aliceAddr = await alice.getAddress();
    const bobAddr = await bob.getAddress();

    const OwnerFactory = await ethers.getContractFactory("Owner", deployer);
    const ownerContract = (await OwnerFactory.deploy()) as Owner;
    await ownerContract.waitForDeployment();

    return { ownerContract, deployer, alice, bob, deployerAddr, aliceAddr, bobAddr };
  }

  it("sets deployer as owner on deployment", async function () {
    const { ownerContract, deployerAddr } = await deployFixture();
    expect(await ownerContract.getOwner()).to.equal(deployerAddr);
  });

  it("emits OwnerSet on deployment (oldOwner=0x0, newOwner=deployer)", async function () {
    const [deployer] = await ethers.getSigners();
    const deployerAddr = await deployer.getAddress();

    const OwnerFactory = await ethers.getContractFactory("Owner", deployer);
    const owner = await OwnerFactory.deploy();
    const deployTx = owner.deploymentTransaction();
    if (!deployTx) throw new Error("Missing deployment transaction");
    const receipt = await deployTx.wait();
    if (!receipt) throw new Error("Missing receipt");

    // Decode logs using the contract interface
    const iface = OwnerFactory.interface;
    const parsed = receipt.logs
      .map((l) => {
        try {
          return iface.parseLog(l);
        } catch {
          return null;
        }
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    const ownerSet = parsed.find((x) => x.name === "OwnerSet");
    expect(ownerSet, "OwnerSet event not found").to.not.equal(undefined);
    expect(ownerSet!.args.oldOwner).to.equal(ethers.ZeroAddress);
    expect(ownerSet!.args.newOwner).to.equal(deployerAddr);
  });

  it("only owner can change owner", async function () {
    const { ownerContract, alice, aliceAddr } = await deployFixture();

    await expect(ownerContract.connect(alice).changeOwner(aliceAddr))
      .to.be.revertedWith("Caller is not owner");
  });

  it("owner can change owner and emits OwnerSet", async function () {
    const { ownerContract, deployer, aliceAddr, deployerAddr } = await deployFixture();

    await expect(ownerContract.connect(deployer).changeOwner(aliceAddr))
      .to.emit(ownerContract, "OwnerSet")
      .withArgs(deployerAddr, aliceAddr);

    expect(await ownerContract.getOwner()).to.equal(aliceAddr);
  });

  it("cannot set new owner to zero address", async function () {
    const { ownerContract, deployer } = await deployFixture();

    await expect(ownerContract.connect(deployer).changeOwner(ethers.ZeroAddress))
      .to.be.revertedWith("New owner should not be the zero address");
  });
});
