import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Owner with account:", deployer.address);
  const bal = await deployer.provider.getBalance(deployer.address);
  console.log("Deployer balance:", bal.toString());

  const Owner = await ethers.getContractFactory("Owner", deployer);
  const owner = await Owner.deploy();
  await owner.waitForDeployment();

  const addr = await owner.getAddress();
  console.log("Owner deployed to:", addr);

  const currentOwner = await owner.getOwner();
  console.log("Current owner is:", currentOwner);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
