# Contract Assignment

## Foundry Contract

### Overview
This project contains the Foundry-based implementation of the `Owner` contract. Foundry is a fast, portable, and modular toolkit for Ethereum application development.

### Deployment Details
- **Deployer Address**: `0xAA7af02B681154F1D32dC454cee2A94fCedE65e7`
- **Contract Address**: `0x6e7cF32E20dBbcDd2B768c44E2f98F1939D918d8`

### Networks
The contract was deployed to the following networks:
- **Lisk Sepolia Testnet**
- **Arc Testnet**

### Commands
#### Build
```bash
forge build
```

#### Deploy
To deploy the contract, use the following command:
```bash
forge create --rpc-url "$LISK_SEPOLIA_RPC_URL" \
  --private-key "$PRIVATE_KEY" \
  src/Owner.sol:Owner
```
Replace `$LISK_SEPOLIA_RPC_URL` and `$PRIVATE_KEY` with your RPC URL and private key, respectively.

#### Deploy to Arc Sepolia Testnet
To deploy the contract to Arc Sepolia Testnet, use the following command:
```bash
forge create --rpc-url "$ARC_SEPOLIA_RPC_URL" \
  --private-key "$PRIVATE_KEY" \
  src/Owner.sol:Owner
```
Replace `$ARC_SEPOLIA_RPC_URL` and `$PRIVATE_KEY` with your RPC URL and private key, respectively.

#### Test
Run the tests using:
```bash
forge test
```

---

## Hardhat Contract

### Overview
This project contains the Hardhat-based implementation of the `Owner` contract. Hardhat is a development environment for compiling, deploying, testing, and debugging Ethereum software.

### Deployment Details
- **Deployer Address**: `0xAA7af02B681154F1D32dC454cee2A94fCedE65e7`
- **Contract Address**: `0x1bDA15257570264D45DC0bf31d64f05863E195BD`

### Networks
The contract was deployed to the following networks:
- **Lisk Sepolia Testnet**
- **Arc Testnet**

### Commands
#### Install Dependencies
Install the required dependencies using:
```bash
npm install
```

#### Compile
Compile the contracts using:
```bash
npx hardhat compile
```

#### Deploy
To deploy the contract, use the following command:
```bash
npx hardhat run scripts/deploy-owner.js --network liskSepolia
```
Replace `liskSepolia` with the desired network.

To deploy the contract to Arc Sepolia Testnet, use the following command:
```bash
npx hardhat run scripts/deploy-owner.js --network arcSepolia
```
Replace `arcSepolia` with the desired network.

#### Test
Run the tests using:
```bash
npx hardhat test
```