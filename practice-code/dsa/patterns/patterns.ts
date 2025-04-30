/*

****
****
****
****

*/

function rectangle() {
  // Outer loop runs for 4 rows
  for (let i = 0; i < 4; i++) {
    // Store a single line.
    let line = "";
    // Inner loop runs for 4 columns
    for (let j = 0; j < 4; j++) {
      line += "*";
    }
    // Once all the stars have been added for all the columns, print the line.
    console.log(line);
  }
}

// rectangle();

function rightAngleTriangle() {
  // Outer loop will run from 1 to 5.
  for (let i = 1; i <= 5; i++) {
    // Stores the line
    let line = "";
    // Inner loop will go from 0 till 1 more than the current i value.
    for (let j = 1; j <= i; j++) {
      // Add the star in the line.
      line += "* ";
    }
    // Print the line.
    console.log(line);
  }
}

// rightAngleTriangle();

function rightAngleTriangleNumbers() {
  // Outer loop will run from 0 upto 5.
  for (let i = 1; i <= 5; i++) {
    // Stores the line
    let line = "";
    // Inner loop will go from 0 till 1 more than the current i value.
    for (let j = 1; j <= i; j++) {
      // Add the numbers in the line.
      line += `${j} `;
    }
    // Print the line.
    console.log(line);
  }
}

// rightAngleTriangleNumbers();

function rightAngleTriangleRows() {
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

// rightAngleTriangleRows();

function pyramid(row: number) {
  for (let i = 1; i <= row; i++) {
    // Calculate how much things we need to print
    const stars = i * 2 - 1; // Number of stars in a row
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

// pyramid(4);

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

pyramidInverse(5);

function almostDiamond() {

}
