// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/Counter.sol";

contract DeployCounter is Script {
    function run() external {
        // 使用环境变量里的私钥来部署
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);
        new Counter();
        vm.stopBroadcast();
    }
}
