"""
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.

Example 1:
----------
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
2 is the missing number in the range since it does not appear in nums.

Example 2:
----------
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
2 is the missing number in the range since it does not appear in nums.

Example 3:
----------
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
8 is the missing number in the range since it does not appear in nums.
"""

from typing import List


def missingNumber(self, nums: List[int]) -> int:
    # The number of elements in the input array
    size = len(nums)

    # Since the array contains numbers from 0 to n (inclusive) and is missing one number,
    # the expected total sum of all numbers from 0 to n can be calculated using the formula:
    # sum = n * (n + 1) / 2
    # Here, n = size because one number is missing from the range [0, size]
    result = size * (size + 1) // 2

    # Now we compute the actual sum of all numbers present in the input array
    total_sum = 0

    # Count the sum of all the numbers
    for num in nums:
        total_sum += num

    # The missing number is the difference between the expected sum and the actual sum
    return result - total_sum


inputs = [
    [3, 0, 1],
    [0, 1],
    [9, 6, 4, 2, 3, 5, 7, 0, 1],
]

for ip in inputs:
    result = missingNumber(None, ip)
    print(result)
