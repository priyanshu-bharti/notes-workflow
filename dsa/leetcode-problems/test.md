---
problem: "Two Sum"
difficulty: "Easy"
description: "Find two numbers in an array that add up to a given target."
naive-approach: "Use a nested loop to check every pair. Time Complexity: O(n^2)."
optimal-approach: "Use a hash map to track complements. Time Complexity: O(n)."
---

## Two Sum Problem

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

### Example:

```md
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9
```
