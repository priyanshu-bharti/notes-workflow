from typing import List

"""

You are given an int array nums of length n. Create an array ans of length 2n
where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Input:
Output: [1,4,1,2,1,4,1,2]

Input: nums = [22,21,20,1]
Output: [22,21,20,1,22,21,20,1]

1 <= nums.length <= 1000.
1 <= nums[i] <= 1000

 """


def getConcatenation(nums: List[int]) -> List[int]:
    # Store the length of the list
    size = len(nums)

    # Create a list with 2x length and fill it with value 0.
    result = [0] * size * 2

    # Walk over each item in the list
    for i in range(size):
        # Set current idx and 2x idx as the same value
        result[i] = result[i + size] = nums[i]

    # Return the result.
    return result


# Input Array
nums = [1, 4, 1, 2]

getConcatenation(nums)
