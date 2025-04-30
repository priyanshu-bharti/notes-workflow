## Why Print Patterns

- Most of the interviewers won't ask this, but is necessary for understanding how loops work.
- Involves 4 step process:
  - For the outer loop, check how many rows you need to print.
  - For the inner loop, check how many cols you need to print.
    - Try to connect the number of columns somehow to the number of rows.
  - Print the "\*" inside the inner loop.
  - Observe symmetry (Optional).

## Questions

### Print a rectangle (4x4)

```plaintext
* * * *
* * * *
* * * *
* * * *
```

#### Solution

- In this pattern we need to print 4 rows. (So the outer loop will run from 0 upto 4).
- There are 4 stars in each row (So the inner loop will also run from 0 till 4).
- Inside the inner loop we'll simply print a star 4 times.
- Once the inner loop ends, we need to move to the next line.

```ts
function rectangle() {
  // Outer loop runs for 4 rows
  for (let i = 0; i < 4; i++) {
    // Store a single line.
    let line = "";
    // Inner loop runs for 4 columns
    for (let j = 0; j < 4; j++) {
      line += "* ";
    }
    // Once all the stars have been added for all the columns, print the line.
    console.log(line);
  }
}
```

### Printing a right angle triangle

```plaintext

*
* *
* * *
* * * *
* * * * *

```

#### Solution

- In this pattern, we have a max of 5 rows. (Outer loop will go from 1 to 5).
- The inner loop will run row amount of times.

```ts
function rightAngleTriangle() {
  // Outer loop will run from 1 to 5.
  for (let i = 1; i <= 5; i++) {
    // Stores the line
    let line = "";
    // Inner loop will go from 1 to whatever number of row we're on.
    for (let j = 1; j <= i; j++) {
      // Add the star in the line.
      line += "* ";
    }
    // Print the line.
    console.log(line);
  }
}
```

### Printing a right angle triangle with numbers

```plaintext
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

#### Solution

- This is similar to the previous code, but instead of printing stars, we print the column number.

```ts
function rightAngleTriangleNumbers() {
  // Outer loop will run from 1 to 5.
  for (let i = 1; i <= 5; i++) {
    // Stores the line
    let line = "";
    // Inner loop will go from 1 to whatever number of row we're on.
    for (let j = 1; j <= i; j++) {
      // Add the numbers in the line.
      line += `${j} `;
    }
    // Print the line.
    console.log(line);
  }
}
```

### Printing right angle triangle based on row numbers

```plaintext
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

#### Solution

- This is also similar to the previous code, but instead of printing the columns, you're printing rows value.

```ts
function rightAngleTriangleRows() {
  // Outer loop will run from 1 to 5.
  for (let i = 1; i <= 5; i++) {
    // Stores the line
    let line = "";
    // Inner loop will go from 1 to whatever number of row we're on.
    for (let j = 1; j <= i; j++) {
      // Add the numbers in the line.
      line += `${i} `;
    }
    // Print the line.
    console.log(line);
  }
}
```

### Printing a star pyramid

```plaintext
     *
    ***
   *****
  *******
 *********
```

#### Solution

- First figure out how many rows to print (this will be the outer loop.)
- Based on the current row calculate:
  - Then figure out how many spaces to add before printing the stars
    - If you observe spaces start from 4 and reduce to 0 in the final row, which is basically row - i
  - Then figure out how many stars are going to be added.
    - If we compare the height and the width (at the very bottom), we get a rectangle (almost) with width twice the height of the rectangle

```ts
function pyramid(row: number) {
  for (let i = 1; i <= row; i++) {
    // Calculate how much things we need to print
    const stars = i * 2 - 1; // Number of stars in a row (almost double the height)
    const spaces = row - i; // Number of spaces to add in each row
    // Print the leading spaces first.
    for (let j = 0; j <= spaces; j++) {
      process.stdout.write(" ");
    }
    // Print the number of trailing stars
    for (let k = 1; k <= stars; k++) {
      process.stdout.write("*");
    }
    // Print in the new line
    process.stdout.write("\n");
  }
}
```

### Printing the inverted pyramid

```plaintext
 *********
  *******
   *****
    ***
     *
```

#### Solution

- You're starting from the widest row and shrinking upwards (reverse pyramid).
- Each row needs more spaces at the beginning as you go up, and fewer stars.
- Stars are calculated with i \* 2 - 1 to maintain the odd numbers like 9, 7, 5, 3, 1.
- After printing spaces + stars, you move to the next line.

```ts
function pyramidInverse(row: number) {
  // Loop from the given number of rows down to 1
  for (let i = 5; i >= 1; i--) {
    // For each row: Calculate how many stars (*) need to be printed.
    const stars = i * 2 - 1; // Formula: stars = (2 * currentRowNumber) - 1
    // Calculate how many spaces need to be printed before the stars.
    const spaces = row - i; // As we move upwards, spaces increase.
    // First, print the spaces to push the stars to the right position.
    for (let j = 0; j < spaces; j++) {
      process.stdout.write(" ");
    }
    // Then, print the stars for the current row.
    for (let k = stars; k >= 1; k--) {
      process.stdout.write("*");
    }
    // Move to the next line after printing each row
    process.stdout.write("\n");
  }
}
```

### Printing Almost Diamond

```plaintext
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
```

#### Solution

```ts

```
