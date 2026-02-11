import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Owner contract...");

  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  const Owner = await ethers.getContractFactory("Owner");
  const ownerContract = await Owner.deploy();

  await ownerContract.deployed();

  console.log(`Owner contract deployed to: ${ownerContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});