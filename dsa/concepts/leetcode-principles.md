## Problem Solving Principles

### Prefix Sum (Finding subarray sum equal to K)

**Use-case**: Finding a subarray which has sum equals to k.

Imagine you're having an array: `[8, -1, 6, 2, 3, 4, 1, -3, 4]` and you want to find out all the subarrays which have sum equal to 5

Now, prefix sum dictates that you keep a running total of the array items.

| Index | Element | Prefix Sum     |
| ----- | ------- | -------------- |
| 0     | 8       | 8              |
| 1     | -1      | 8 + (-1) = 7   |
| 2     | 6       | 7 + 6 = 13     |
| 3     | 2       | 13 + 2 = 15    |
| 4     | 3       | 15 + 3 = 18    |
| 5     | 4       | 18 + 4 = 22    |
| 6     | 1       | 22 + 1 = 23    |
| 7     | -2      | 23 + (-2) = 21 |
| 8     | 4       | 21 + 4 = 25    |

Prefix Sum: `[8, 7, 13, 15, 18, 22, 23, 21, 25]`

We can clearly see that:

- **Case 1**: [-1, 6] is a subarray which equals to 5.
- **Case 2**: [2, 3] is a subarray which equals to 5.
- **Case 3**: [3, 4, 1, -3] is a subarray which equals to 5.

To find these we can simply use the prefix sum's difference.

- [-1, 6] starts from index 1 and ends at index 2.
- `prefix[2]` - `prefix[0]` gives us the sum `(13 - 8) = 5`.
- We're doing the difference of the prefix sum because:
  - 13 is the sum which we eventually got.
  - 8 was the sum we had previously got.
  - This means that the in-between sum must be 13 - 8 (which is what we did.)

#### How does this work?

- If `runningSum = k`, then subarray from start till now is valid.
- Else, check if `runningSum - k` is in the map.
  - If yes, subarray after that point till now is valid.
    - Calculate the length `now - seen[runningSum - k]`
    - Update the maxLength `max(currLength, maxLength)`
  - If no, then simply add the value to the seen map.

## Boyer Moore (Find n/2 Majority Element) Algorithm

- Used to find the element that appears more than ⌊n / 2⌋ times.
- Works only if such a majority element is guaranteed to exist.
- Keeps track of:
  - A potential majority element (`majorityElement`)
  - A count representing how often we've seen the same element.

### ✅ How it works:

- Start with `count = 0` and `majorityElement = None`.
- For each number in the array:
  - If `count == 0`: set current number as the `majorityElement`, reset `count = 1`.
  - Else if number is **same** as `majorityElement`: increase `count`.
  - Else (number is **different**): decrease `count`.
- After full traversal, `majorityElement` will hold the correct result.

### ⚠️ Things to Watch Out For:

- Only use this when the majority element **definitely exists**.
- Doesn’t give the right result if the assumption is violated.

### Dry Run

| Index | Num | Current Majority | Count | Action                                   |
| ----- | --- | ---------------- | ----- | ---------------------------------------- |
| 0     | 3   | None             | 1     | Count was 0 → Set majority = 3           |
| 1     | 1   | 3                | 0     | Different from majority → Decrease count |
| 2     | 1   | 1                | 1     | Count was 0 → Set majority = 1           |
| 3     | 0   | 1                | 0     | Different → Decrease count               |
| 4     | 1   | 1                | 1     | Count was 0 → Set majority = 1           |
| 5     | 3   | 1                | 0     | Different → Decrease count               |
| 6     | 3   | 3                | 1     | Count was 0 → Set majority = 3           |
| 7     | 4   | 3                | 0     | Different → Decrease count               |
| 8     | 4   | 4                | 1     | Count was 0 → Set majority = 4           |
| 9     | 1   | 4                | 0     | Different → Decrease count               |

## Leetcode Problems

### Arrays

#### Easy

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

#### Medium

12. [Two Sum](../leetcode-problems/arrays/12.TwoSum.md)
13. [Sort 0s, 1s and 2s](../leetcode-problems/arrays/13.Sort01and2.md)
14. [Majority Element (n/2)](../leetcode-problems/arrays/14.MajorityElement.md)
