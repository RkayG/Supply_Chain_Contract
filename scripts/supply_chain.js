// SPDX-License-Identifier: MIT
const { ethers } = require("hardhat");

async function main() {
  const supplyChainFactoryAddress = "0xf8a908a4C9643FcEbb9EcC762027beA220B172C0"; // SupplyChainFactory contract address
  const signers = await ethers.getSigners(); 
  const supplyChainFactory = await ethers.getContractAt("SupplyChainFactory", supplyChainFactoryAddress, signers[0]);

  const productName = "Jelly";
  const description = "Body cream for babies";

  // Create a new instance of SupplyChain
  const tx = await supplyChainFactory.createSupplyChain(productName, description);
  const receipt = await tx.wait();


  console.log("Transaction hash:", receipt.transactionHash);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
