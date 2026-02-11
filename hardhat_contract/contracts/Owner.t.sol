// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../contracts/Owner.sol";

contract OwnerTest is Test {
    Owner private ownerContract;

    address private constant NEW_OWNER = address(0x123);
    address private constant NON_OWNER = address(0x456);

    function setUp() public {
        ownerContract = new Owner();
    }

    function testConstructorSetsOwner() public view {
        assertEq(ownerContract.getOwner(), address(this), "Owner should be the deployer");
    }

    function testChangeOwner() public {
        ownerContract.changeOwner(NEW_OWNER);
        assertEq(ownerContract.getOwner(), NEW_OWNER, "Owner should be updated to NEW_OWNER");
    }

    function testChangeOwnerByNonOwnerReverts() public {
        vm.prank(NON_OWNER);
        vm.expectRevert("Caller is not owner");
        ownerContract.changeOwner(NEW_OWNER);
    }

    function testChangeOwnerToZeroAddressReverts() public {
        vm.expectRevert("New owner should not be the zero address");
        ownerContract.changeOwner(address(0));
    }
}