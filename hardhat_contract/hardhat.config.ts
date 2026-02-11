import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const {
  PRIVATE_KEY,
  LISK_SEPOLIA_RPC_URL,
  ARC_TESTNET_RPC_URL,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
   networks: {
    liskSepolia: {
      url: LISK_SEPOLIA_RPC_URL,
      chainId: 4202,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    arcTestnet: {
      url: ARC_TESTNET_RPC_URL,
      chainId: 5042002,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};

export default config;
