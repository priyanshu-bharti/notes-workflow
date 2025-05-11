"""
Given two sorted arrays nums1 and nums2, return an array that contains the union
of these two arrays. The elements in the union must be in ascending order.

The union of two arrays is an array where all values are distinct and are present
in either the first array, the second array, or both.

Example 1:
----------
Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
Output: [1, 2, 3, 4, 5, 7]
Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1
and 7 is from nums2

Example 2:
----------
Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]
Output: [1, 3, 4, 5, 6, 7, 8, 9]
Explanation: The element 7 is common to both, 3, 4, 6, 9 are from nums1
and 1, 5, 8 is from nums2
"""


def unionArray(self, nums1, nums2):
    # Just for readability
    size_left = len(nums1)
    size_right = len(nums2)

    # Pointers for walking through the list
    left = 0
    right = 0

    # Final result list to store the union (no duplicates, sorted order)
    result = []

    # Traverse both arrays until we reach the end of one of them
    while left < size_left and right < size_right:
        # Case 1: Left current element is smaller
        if nums1[left] < nums2[right]:
            # If result is empty or the last inserted item is distinct, then add the item.
            if not result or result[-1] != nums1[left]:
                result.append(nums1[left])
            # Move the pointer ahead
            left += 1

        # Case 2: Right current element is smaller
        elif nums2[right] < nums1[left]:
            # If result is empty or the last inserted item is distinct, then add the item.
            if not result or result[-1] != nums2[right]:
                result.append(nums2[right])
            # Move the pointer ahead
            right += 1

        # Case 3: Both are equal
        else:
            # If result is empty or the last inserted item is distinct, then add the item.
            if not result or result[-1] != nums1[left]:
                result.append(nums1[left])
            # Since both are the same item, move both left and right pointers ahead.
            left += 1
            right += 1

    # Either the left or the right array will be remaining at this point.
    # Copy all the remaining unique items from the array
    while left < size_left:
        # If result is empty or the last inserted item is distinct, then add the item.
        if not result or result[-1] != nums1[left]:
            result.append(nums1[left])
        # Move left pointer ahead.
        left += 1

    # Copy all the remaining unique items from the array
    while right < size_right:
        # If result is empty or the last inserted item is distinct, then add the item.
        if not result or result[-1] != nums2[right]:
            result.append(nums2[right])
        # Move left pointer ahead.
        right += 1

    return result


inputs = [
    [
        [3, 4, 6, 7, 9, 9],
        [1, 5, 7, 8, 8],
    ],
    [
        [1, 2, 3, 4, 5],
        [1, 2, 7],
    ],
]

for n1, n2 in inputs:
    result = unionArray(None, n1, n2)
    print(result)

"""
Results
-------
[1, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 7]
"""
