## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

# Foundry Contract

## Overview
This project contains the Foundry-based implementation of the `Owner` contract. Foundry is a fast, portable, and modular toolkit for Ethereum application development written in Rust.

## Deployment Details
- **Deployer Address**: `0xAA7af02B681154F1D32dC454cee2A94fCedE65e7`
- **Contract Address**: `0x6e7cF32E20dBbcDd2B768c44E2f98F1939D918d8`

## Networks
The contract was deployed to the following networks:
- **Lisk Sepolia Testnet**
- **Arc Testnet**

## Commands
### Build
```bash
forge build
```

### Deploy
To deploy the contract, use the following command:
```bash
forge create --rpc-url "$LISK_SEPOLIA_RPC_URL" \
  --private-key "$PRIVATE_KEY" \
  src/Owner.sol:Owner
```
Replace `$LISK_SEPOLIA_RPC_URL` and `$PRIVATE_KEY` with your RPC URL and private key, respectively.

### Test
Run the tests using:
```bash
forge test
```
