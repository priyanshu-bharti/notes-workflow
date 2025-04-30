"""
Input: nums = [8, 8, 7, 6, 5]
Output: 7
Explanation: The largest value in nums is 8, the second largest is 7

Input: nums = [10, 10, 10, 10, 10]
Output: -1
Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned
"""

import math


def secondLargestElement(nums):
    # max and second max are initially -Infinity.
    second_max = maximum = -math.inf

    # Get the size of the list
    size = len(nums)

    # If the length is 0 or 1, there is no 2nd max
    if size < 2:
        return None

    # Walk through the array to find the max
    for i in range(size):
        # Store the curr value
        curr_value = nums[i]

        # If curr_value is bigger than maximum then,
        # 1. The value of maximum is the second_max
        # 2. The curr_value is the new maximum
        if curr_value > maximum:
            second_max = maximum
            maximum = curr_value

        # If the curr_value is bigger than second_max but is not the maximum
        # Then simply update the second_max value.
        elif curr_value > second_max and curr_value != maximum:
            second_max = curr_value

    # If the second max is -Infinity, then return -1
    return second_max if second_max != -math.inf else -1


nums = [[8, 8, 7, 6, 5], [10, 10, 10, 10, 10]]

for num in nums:
    result = secondLargestElement(num)
    print(result)
