"""
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
----------
Input: nums = [2,2,1]
Output: 1

Example 2:
----------
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
----------
Input: nums = [1]
Output: 1
"""

from typing import List


def singleNumber(self, nums: List[int]) -> int:
    # For tracking the missing number
    missing: int = 0

    # Walk the array, then XOR all items
    for num in nums:
        # XOR has a unique property:
        #   - a ^ a = 0 (a number XOR-ed with itself is 0)
        #   - a ^ 0 = a (a number XOR-ed with 0 is the number itself)
        # This means if we XOR all numbers together, the pairs will cancel out (become 0),
        # and the single unpaired number will remain.
        missing ^= num

    # At the end a value which is distinct is going to remain.
    return missing


inputs = [
    [1],
    [4, 1, 2, 1, 2],
    [2, 2, 1],
]

for ip in inputs:
    result = singleNumber(None, ip)
    print(result)
