// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "./SupplyChain.sol";

contract SupplyChainFactory {
    event SupplyChainCreated(address indexed owner, address indexed supplyChain);

    // create new supply chain
    function createSupplyChain(string memory _productName, string memory _description) public returns (address) {
        SupplyChain newSupplyChain = new SupplyChain();
        newSupplyChain.createProduct(_productName, _description);
        emit SupplyChainCreated(msg.sender, address(newSupplyChain));
        return address(newSupplyChain);
    }
}
