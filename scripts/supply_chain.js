// SPDX-License-Identifier: MIT
const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();

  // Deploy the SupplyChain contract
  const SupplyChainFactory = await ethers.getContractFactory("SupplyChain");
  const supplyChain = await SupplyChainFactory.deploy();
  await supplyChain.waitForDeployment();

  console.log("SupplyChain deployed to:", supplyChain.target);

  // Create a product
  const productName = "Jelly";
  const description = "Body cream for babies";

  const createProductTx = await supplyChain.createProduct(productName, description);
  console.log("Product created");

  // Get the transaction hash
  console.log("Transaction hash:", createProductTx.hash);

  // Get product info
  const [owner, product, productDescription] = await supplyChain.getProductInfo(signer.address);

  console.log("Product owner:", owner);
  console.log("Product name:", product);
  console.log("Product description:", productDescription);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
