const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    // console.log(deployer);
  
    // const weiAmount = (await deployer.getBalance()).toString();
    const weiAmount = await ethers.provider.getBalance(deployer.address); // ethers v6 update
    
    console.log("Account balance:", (await ethers.formatEther(weiAmount)));
  
    const Token = await ethers.getContractFactory("GoofyGoober");
    const token = await Token.deploy();
    // console.log(token);
  
    console.log("Token address:", token.target); // token.address -> token.target: ethers v6 update
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });