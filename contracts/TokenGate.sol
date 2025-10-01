// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenGate is ERC721, Ownable {
    uint256 public nextTicketId;
    mapping(uint256 => bool) public checkedIn;

    constructor() ERC721("TokenGate Ticket", "TGT") {}

    // Mint a new NFT ticket
    function mintTicket(address to) external onlyOwner {
        _safeMint(to, nextTicketId);
        nextTicketId++;
    }

    // Mark ticket as used
    function checkIn(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not ticket owner");
        require(!checkedIn[tokenId], "Ticket already used");

        checkedIn[tokenId] = true;
    }

    // Validate ticket
    function isValid(uint256 tokenId) external view returns (bool) {
        return !checkedIn[tokenId];
    }
}
