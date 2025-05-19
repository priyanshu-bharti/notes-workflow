"""
Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 3, k = 1, array[] = {-1, 1, 1}
Result: 3
Explanation: The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.
"""

from math import inf


def longestSubarray(self, nums, k):
    # Get the total number of elements in the array
    size = len(nums)

    # Dictionary to store the first occurrence of each running (prefix) sum
    # Key   = running prefix sum up to index i
    # Value = first index where that sum was seen
    seen = {}

    # Tracks the length of the longest subarray found so far whose sum equals k
    max_length = 0

    # Running total / prefix sum of elements as we iterate
    running_total = 0

    # Traverse the array while calculating the running (prefix) sum
    for i in range(size):
        # Update the running total to include current element
        running_total += nums[i]

        # Case 1: Subarray starts from index 0 and ends at i
        # If total sum so far equals k, then entire subarray [0...i] is valid
        if running_total == k:
            max_length = i + 1  # length is i + 1 since index starts from 0

        # Case 2: Look for a prefix sum that, when removed from current sum, gives k
        # i.e., (running_total - k) should have appeared before — that segment can be skipped
        elif (running_total - k) in seen:
            # Get the earlier index where the "remaining" sum was seen
            start_index = seen[running_total - k]
            # Subarray [start_index + 1 ... i] will sum to k
            max_length = max(max_length, i - start_index)

        # Case 3: If this is the first time we’re seeing this running_total, store its index
        # We do this only for the first occurrence to ensure we get the longest subarray
        if running_total not in seen:
            seen[running_total] = i

    # Return the maximum length of any subarray found that sums to k
    return max_length


test_cases = [
    # Format: (array, k, expected_length)
    # Simple positive case
    ([2, 3, 5], 5, 2),  # [2, 3]
    # Negative number helping make the sum
    ([-1, 1, 1], 1, 3),  # [-1, 1, 1]
    # Sum occurs mid-array
    ([1, 2, 3, 7, 5], 12, 2),  # [7, 5]
    # All negative numbers
    ([-1, -2, -3, -4], -6, 3),  # [-1, -2, -3]
    # No subarray adds up to k
    ([1, 2, 3], 10, 0),
    # Whole array adds up to k
    ([1, 2, 3, -1, 0], 5, 5),
    # Zero sum with negatives and positives
    ([4, -2, -2, 2, 1], 3, 4),  # [-2, -2, 2, 1]
    # Multiple possible subarrays, need longest
    ([1, 1, 1, 1, 1, 1], 3, 3),
    # Prefix sum repeats, test map handling
    ([3, 4, -7, 1, 3, 3, 1, -4], 7, 5),  # [1, 3, 3, 1, -4]
    # All zeros, looking for sum 0
    ([0, 0, 0, 0], 0, 4),
]

for arr, k, exp in test_cases:
    result = longestSubarray(None, arr, k)
    print(result, exp)
