# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

# Hardhat Contract

## Overview
This project contains the Hardhat-based implementation of the `Owner` contract. Hardhat is a development environment for compiling, deploying, testing, and debugging Ethereum software.

## Deployment Details
- **Deployer Address**: `0xAA7af02B681154F1D32dC454cee2A94fCedE65e7`
- **Contract Address**: `0x1bDA15257570264D45DC0bf31d64f05863E195BD`

## Networks
The contract was deployed to the following networks:
- **Lisk Sepolia Testnet**
- **Arc Testnet**

## Commands
### Install Dependencies
Install the required dependencies using:
```bash
npm install
```

### Compile
Compile the contracts using:
```bash
npx hardhat compile
```

### Deploy
To deploy the contract, use the following command:
```bash
npx hardhat run scripts/deploy-owner.js --network liskSepolia
```
Replace `liskSepolia` with the desired network.

### Test
Run the tests using:
```bash
npx hardhat test
```
