"""
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

Example 1:
----------
Input: nums = [3,2,3]
Output: 3

Example 2:
----------
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Follow-up: Could you solve the problem in linear time and in O(1) space?
"""

from typing import List


def majorityElement(self, nums: List[int]) -> int:
    # Initially we have no clue what is the majority element.
    count = 0  # Don't know the count
    majorityElement = None  # Don't know the element.

    # Walk the array
    for num in nums:
        # Case 1: We have no majority element
        # When count reaches 0, update count & majority element as current
        if count == 0 or majorityElement == None:
            # Update majority element
            majorityElement = num
            # Set the occurrence to 1
            count = 1

        # Case 2: Different element
        # Current number is NOT the majority element
        elif num != majorityElement:
            count -= 1  # Decrease count

        # Case 3: Same element
        # Current number is the majority element
        else:
            count += 1  # Increase count

        # We track how big the count is. Once the count becomes 0, the current
        # Majority Element is not valid. So we Update the majority element candidate.
        # Different items will cancel out (in terms of count), and we'll be left
        # with an item which occurs more times.

    # Return the result
    return majorityElement


inputs = [
    [2, 2, 1, 1, 1, 2, 2],
    [3, 2, 3],
]

for ip in inputs:
    result = majorityElement(None, ip)
    print(result)
