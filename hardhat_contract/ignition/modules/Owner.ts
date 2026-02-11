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

// import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// export default buildModule("CounterModule", (m) => {
//   const counter = m.contract("Counter");

//   m.call(counter, "incBy", [5n]);

//   return { counter };
// });