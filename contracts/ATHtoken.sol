// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract ATHToken is ERC20, ERC20Burnable, Ownable {
    using SafeMath for uint256;

    uint256 private constant initialSupply = 10e6 * 10 ** 18; //10 million

    constructor(address _user) ERC20("Athena DexFi", "ATH") {
        _mint(_user, initialSupply);
    }

    receive() external payable {
        payable(owner()).transfer(msg.value);
    }

}