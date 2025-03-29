---
topic: "Binary Search"
difficulty: "Medium"
description: "Binary Search is an efficient algorithm for finding an element in a sorted array."
use-cases: "Finding elements in sorted datasets, searching in dictionaries, etc."
time-complexity: "O(log n)"
space-complexity: "O(1)"
---

## Binary Search

Binary search is a classic algorithm used to search for an element in a sorted array efficiently.

### Algorithm:

1. Find the middle element.
2. If it matches the target, return the index.
3. If the target is smaller, search the left half.
4. If the target is larger, search the right half.
5. Repeat until the element is found or the array is exhausted.

### Code (Python):

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```
