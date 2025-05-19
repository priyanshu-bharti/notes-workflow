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
