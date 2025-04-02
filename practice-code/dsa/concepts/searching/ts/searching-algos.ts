class SearchAlgorithms {
  public binarySearch(arr: number[], needle: number): number {
    let lo: number = 0;
    let hi: number = arr.length - 1;

    while (lo <= hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);

      if (arr[mid] === needle) {
        return mid;
      } else if (arr[mid] > needle) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    return -1;
  }

  public binarySearchRecursive(
    arr: number[],
    needle: number,
    lo: number,
    hi: number
  ): number {
    if (hi < lo) {
      return -1;
    }

    let mid = Math.floor(lo + (hi - lo) / 2);

    if (arr[mid] === needle) {
      return mid;
    } else if (arr[mid] > needle) {
      return this.binarySearchRecursive(arr, needle, lo, mid - 1);
    } else {
      return this.binarySearchRecursive(arr, needle, mid + 1, hi);
    }
  }

  public jumpSearch(arr: number[], needle: number): number {
    let jumpAmount = Math.floor(Math.sqrt(arr.length));
    let prev = 0;

    // Figure out which block is it
    while (prev < arr.length && arr[prev] <= needle) {
      prev += jumpAmount;
    }

    let start = Math.max(0, prev - jumpAmount);
    let end = Math.min(arr.length, prev + jumpAmount);

    // Linearly search that block.
    for (let i = start; i < end; i++) {
      if (arr[i] === needle) {
        return i;
      }
    }

    return -1;
  }
}

const search = new SearchAlgorithms();

const testCases = [
  { arr: [1, 3, 5, 7, 9, 11, 13], needle: 7, expected: 3 }, // Found at index 3
  { arr: [2, 4, 6, 8, 10, 12, 14], needle: 10, expected: 4 }, // Found at index 4
  { arr: [5, 10, 15, 20, 25, 30], needle: 5, expected: 0 }, // First element
  { arr: [5, 10, 15, 20, 25, 30], needle: 30, expected: 5 }, // Last element
  { arr: [1, 2, 3, 4, 5, 6, 7], needle: 8, expected: -1 }, // Not found
  { arr: [], needle: 3, expected: -1 }, // Empty array
  { arr: [1], needle: 1, expected: 0 }, // Single element match
  { arr: [1], needle: 2, expected: -1 }, // Single element no match
];

// Running test cases
testCases.forEach(({ arr, needle, expected }, index) => {
  console.log(`Test Case ${index + 1}`);
  // console.log( "Binary Search Iterative:", search.binarySearch(arr, needle) === expected);
  // console.log( "Binary Search Recursive:", search.binarySearchRecursive(arr, needle, 0, arr.length - 1) === expected);
  console.log("Jump Search:", search.jumpSearch(arr, needle) === expected);
});
