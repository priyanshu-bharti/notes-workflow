"""
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
----------
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
----------
Input: nums = [1,0,1,1,0,1]
Output: 2

"""

from typing import List


def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
    # Tracks the count of current streak of 1s.
    currentOnes = 0
    # Tracks the maximum streak found so far.
    maximumOnes = 0

    # Walk through the array and update the current and maximum ones count.
    for num in nums:
        # If the number is 1, Continue adding to the current streak of 1s.
        if num == 1:
            currentOnes += 1
        # If the number is a 0 then streak ends, update max if current streak is longer.
        else:
            # update the max count for ones
            maximumOnes = max(currentOnes, maximumOnes)
            # Reset the streak counter.
            currentOnes = 0

    # Final comparison in case the array ends with 1s.
    return max(currentOnes, maximumOnes)


inputs = [
    [1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1],
    [1],
    [0],
]

for ip in inputs:
    result = findMaxConsecutiveOnes(None, ip)
    print(result)
