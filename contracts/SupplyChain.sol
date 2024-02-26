// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SupplyChain {

    struct Product {
        address owner;
        string productName;
        string productDescription;
    }

    mapping(address => Product) public products;
   
    event ProductCreated(address indexed owner, string product, string productDescription);

 /*    constructor(address _owner, string memory _product) {
        owner = _owner;
        product = _product;
        emit ProductCreated(_owner, _product);
    } */

    // function to create product
    function createProduct(string memory _productName, string memory _description) public {
        require(msg.sender != address(0), "Invalid address");
        require(bytes(_productName).length > 0, "Empty product name");
        require(bytes(_description).length > 0, "Empty description");

        Product storage newProduct = products[msg.sender];
        newProduct.owner = msg.sender;
        newProduct.productName = _productName;
        newProduct.productDescription = _description;

        emit ProductCreated(msg.sender, _productName, _description);
    }

    // function to get product details
    function getProductInfo(address _owner) public view returns (
        address,
        string memory,
        string memory   
    ) {
        Product memory availProduct = products[_owner];
        return (availProduct.owner, availProduct.productName, availProduct.productDescription);
    }
}
