import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { network } from "hardhat";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Owner Contract", function () {
  let ownerContract: any;
  let owner: any;
  let newOwner: any;
  let nonOwner: any;

  beforeEach(async function () {
    [owner, newOwner, nonOwner] = await ethers.getSigners();
    const Owner = await ethers.getContractFactory("Owner");
    ownerContract = await Owner.deploy();
    await ownerContract.deployed();
  });

  it("Should set the deployer as the owner", async function () {
    expect(await ownerContract.getOwner()).to.equal(owner.address);
  });

  it("Should allow the owner to change ownership", async function () {
    await ownerContract.changeOwner(newOwner.address);
    expect(await ownerContract.getOwner()).to.equal(newOwner.address);
  });

  it("Should revert if a non-owner tries to change ownership", async function () {
    await expect(
      ownerContract.connect(nonOwner).changeOwner(newOwner.address)
    ).to.be.revertedWith("Caller is not owner");
  });

  it("Should revert if trying to set the owner to the zero address", async function () {
    await expect(ownerContract.changeOwner(ethers.constants.AddressZero)).to.be.revertedWith(
      "New owner should not be the zero address"
    );
  });
});