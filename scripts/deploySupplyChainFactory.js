// scripts/deploySupplyChainFactory.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying SupplyChainFactory with the account:", deployer.address);

  const SupplyChainFactory = await ethers.getContractFactory("SupplyChainFactory");
  const supplyChainFactory = await SupplyChainFactory.deploy();

  console.log("SupplyChainFactory address:", supplyChainFactory.target);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
