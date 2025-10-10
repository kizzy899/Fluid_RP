// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IReadingPlatform {
    function deposit(uint256 amount) external;
    function startReading(uint256 contentId) external;
    function endReading(uint256 contentId) external;
    function balanceOf(address user) external view returns (uint256);
    function readingStatus(address user, uint256 contentId) external view returns (bool isReading, uint256 startTime, uint256 accruedCost);

    event LowBalance(address indexed user, uint256 balance);
    event Charge(address indexed user, uint256 contentId, uint256 amount);
    event Deposit(address indexed user, uint256 amount);
    event Refund(address indexed user, uint256 amount);
}
