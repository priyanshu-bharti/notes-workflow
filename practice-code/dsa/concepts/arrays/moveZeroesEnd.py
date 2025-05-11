"""
Given an integer array nums, move all 0's to the end of it while maintaining the
relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Follow up: Could you minimize the total number of operations done?

Example 1:
----------
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
----------
Input: nums = [0]
Output: [0]

"""

from typing import List


def moveZeroes(self, nums: List[int]) -> None:
    """
    Modifies `nums` in-place by moving all 0's to the end,
    while keeping the order of non-zero elements the same.

    Strategy:
    - Use a pointer `lastNonZeroIdx` to keep track of the position
      where the next non-zero element should go.
    - First pass: Iterate over the array and overwrite elements from the front
      with non-zero values, maintaining their relative order.
    - Second pass: Fill the rest of the array (from `lastNonZeroIdx` onward) with 0s.

    This approach minimizes the number of writes and avoids unnecessary swaps.
    """

    # Store the size of the list
    size = len(nums)

    # Position where the next non zero item should be placed.
    lastNonZeroIdx = 0

    # Pass 1: Walk over the list items and move all non zero items ahead.
    for i in range(size):
        # If the current item is not 0
        if nums[i] != 0:
            # Move the current item to the non zero index
            nums[lastNonZeroIdx] = nums[i]
            # Move pointer ahead for remaining items.
            lastNonZeroIdx += 1

    # Pass 2: Make the remaining items 0s
    for i in range(lastNonZeroIdx, size):
        nums[i] = 0


inputs = [
    [0, 1, 0, 3, 12],
    [0, 0],
    [1, 1],
    [1, 2, 4, 5, 0, 0, 1],
    [0],
]

for arr in inputs:
    moveZeroes(None, arr)
    print(arr)
