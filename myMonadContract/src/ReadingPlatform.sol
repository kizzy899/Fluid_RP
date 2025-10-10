// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IReadingPlatform.sol";

contract ReadingPlatform is IReadingPlatform {
    IERC20 public token;
    uint256 public minDeposit = 1e18;
    uint256 public ratePerSecond = 1e16;

    struct Session {
        bool isReading;
        uint256 startTime;
        uint256 accruedCost;
    }

    mapping(address => uint256) private _balances;
    mapping(address => mapping(uint256 => Session)) private _sessions;

    constructor(IERC20 _token) {
        token = _token;
    }

    function deposit(uint256 amount) external override {
        require(amount >= minDeposit, "Deposit too low");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        _balances[msg.sender] += amount;
        emit Deposit(msg.sender, amount);
    }

    function startReading(uint256 contentId) external override {
        Session storage s = _sessions[msg.sender][contentId];
        require(!s.isReading, "Already reading");
        require(_balances[msg.sender] >= minDeposit, "Insufficient balance");

        s.isReading = true;
        s.startTime = block.timestamp;
        s.accruedCost = 0;
    }

    function endReading(uint256 contentId) external override {
        Session storage s = _sessions[msg.sender][contentId];
        require(s.isReading, "Not reading");

        uint256 secondsElapsed = block.timestamp - s.startTime;
        uint256 cost = secondsElapsed * ratePerSecond;

        if(cost > _balances[msg.sender]) {
            cost = _balances[msg.sender];
        }

        _balances[msg.sender] -= cost;
        s.accruedCost += cost;
        s.isReading = false;

        emit Charge(msg.sender, contentId, cost);

        uint256 refundAmount = _balances[msg.sender];
        if(refundAmount > 0) {
            _balances[msg.sender] = 0;
            require(token.transfer(msg.sender, refundAmount), "Refund failed");
            emit Refund(msg.sender, refundAmount);
        }
    }

    function balanceOf(address user) external view override returns (uint256) {
        return _balances[user];
    }

    function readingStatus(address user, uint256 contentId) external view override returns (bool, uint256, uint256) {
        Session storage s = _sessions[user][contentId];
        return (s.isReading, s.startTime, s.accruedCost);
    }
}
