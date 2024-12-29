require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { ALCHEMY_SEPOLIA_URL, SEPOLIA_PRIVATE_KEY, ETHERSCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY
  }
};