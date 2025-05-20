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

1. [LargestElementInArray](../leetcode-problems/arrays/1.LargestElementInArray.md)
2. [SecondLargestElement](../leetcode-problems/arrays/2.SecondLargestElement.md)
3. [CheckRotatedSortedArray](../leetcode-problems/arrays/3.CheckRotatedSortedArray.md)
4. [RemoveDuplicatesSortedArray](../leetcode-problems/arrays/4.RemoveDuplicatesSortedArray.md)
5. [RotateArrayKPlaces](../leetcode-problems/arrays/5.RotateArrayKPlaces.md)
6. [MoveZeroesEnd](../leetcode-problems/arrays/6.MoveZeroesEnd.md)
7. [UnionOfArrays](../leetcode-problems/arrays/7.UnionOfArrays.md)
8. [MissingNumber](../leetcode-problems/arrays/8.MissingNumber.md)
9. [MaxConsecutiveOnes](../leetcode-problems/arrays/9.MaxConsecutiveOnes.md)
10. [NumberAppearingTwice](../leetcode-problems/arrays/10.NumberAppearingTwice.md)
11. [LongestSubarraySum](../leetcode-problems/arrays/11.LongestSubarraySum.md)
12. [TwoSum](../leetcode-problems/arrays/12.TwoSum.md)
