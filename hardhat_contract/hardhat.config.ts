import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";

dotenv.config();

const {
  PRIVATE_KEY,
  LISK_SEPOLIA_RPC_URL,
  ARC_TESTNET_RPC_URL,
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: false, 
        runs: 200,
      },
    },
  },

  networks: {
    arcTestnet: {
      url: ARC_TESTNET_RPC_URL!,
      accounts: [PRIVATE_KEY!],
      type: "http",
    },
    liskSepolia: {
      url: LISK_SEPOLIA_RPC_URL!,
      accounts: [PRIVATE_KEY!],
      type: "http",
    },
  },
  etherscan: {
    apiKey: {
      arcTestnet: "empty",
      liskSepolia: "empty",
    },
    customChains: [
      {
        network: "arcTestnet",
        chainId: 421614,
        urls: {
          apiURL: "https://explorer.testnet.arc.xyz/api",
          browserURL: "https://explorer.testnet.arc.xyz",
        },
      },
      {
        network: "liskSepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
};

export default config;