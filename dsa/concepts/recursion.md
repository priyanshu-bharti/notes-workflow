## What is Recursion?

- A function which calls itself until a problem gets solved.
- On each subsequent call, the problem gets smaller until it is handled by base case.

```java
int sum(int number) {
  // Base case: If the number is 1, then the sum is also 1.
  if (number == 1) {
    return 1;
  }

  // Recursive call: Add the current number with the sum of n-1 numbers.
  return number + sum(number - 1);
}
```

| Function Call | Return Address | Return Value | Argument |
| ------------- | -------------- | ------------ | -------- |
| sum(5)        | sum(5)         | 15           | 5        |
|               | sum(4)         | 10           | 4        |
|               | sum(3)         | 6            | 3        |
|               | sum(2)         | 3            | 2        |
|               | sum(1)         | 1            | 1        |
