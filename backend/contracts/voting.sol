// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Voting {
    mapping(address => bool) public hasVoted;
    mapping(uint256 => uint256) public votesCount;

    event VoteCast(address indexed voter, uint256 kandidatId);

    function castVote(uint256 kandidatId) public {
        require(!hasVoted[msg.sender], "Already voted");
        hasVoted[msg.sender] = true;
        votesCount[kandidatId]++;
        emit VoteCast(msg.sender, kandidatId);
    }

    function getVotes(uint256 kandidatId) public view returns (uint256) {
        return votesCount[kandidatId];
    }
}
