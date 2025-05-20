## Array vs Linked List

| Arrays                                | Linked List                              |
| ------------------------------------- | ---------------------------------------- |
| Fixed Size                            | Growable                                 |
| Random Access                         | Sequential Access                        |
| Setting value in any location is O(1) | Setting is O(1) but to get there is O(N) |
| Shifting and Unshifting sucks         | Traversing Sucks,                        |

## What are ArrayLists?

- Like a regular array but with a trick.
- When the array is filled entirely, A new array 2x the size of the current one is created, and all the contents inside are copied.
- Arrays in Python and JS are ArrayLists, meaning they can grow and shrink and once the capacity is full, size gets doubled.

## Leetcode Problems

1. [Largest Element In Array](../leetcode-problems/arrays/1.LargestElementInArray.md)
2. [Second Largest Element](../leetcode-problems/arrays/2.SecondLargestElement.md)
3. [Check Rotated Sorted Array](../leetcode-problems/arrays/3.CheckRotatedSortedArray.md)
4. [Remove Duplicates Sorted Array](../leetcode-problems/arrays/4.RemoveDuplicatesSortedArray.md)
5. [Rotate Array K Places](../leetcode-problems/arrays/5.RotateArrayKPlaces.md)
6. [Move Zeroes End](../leetcode-problems/arrays/6.MoveZeroesEnd.md)
7. [Union Of Arrays](../leetcode-problems/arrays/7.UnionOfArrays.md)
8. [Missing Number](../leetcode-problems/arrays/8.MissingNumber.md)
9. [Max Consecutive Ones](../leetcode-problems/arrays/9.MaxConsecutiveOnes.md)
10. [Number Appearing Twice](../leetcode-problems/arrays/10.NumberAppearingTwice.md)
11. [Longest Subarray Sum](../leetcode-problems/arrays/11.LongestSubarraySum.md)
12. [Two Sum](../leetcode-problems/arrays/12.TwoSum.md)
13. [Sort 0s, 1s and 2s](../leetcode-problems/arrays/13.Sort01and2.md)
