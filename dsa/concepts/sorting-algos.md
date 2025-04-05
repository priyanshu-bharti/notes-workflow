## Cheatsheet

| Algorithm   | Description                                                                | TC (Best / Avg / Worst)              | SC       |
| ----------- | -------------------------------------------------------------------------- | ------------------------------------ | -------- |
| Bubble Sort | Repeatedly swaps adjacent elements if they are in the wrong order          | O(n) / O(n²) / O(n²)                 | O(1)     |
| Insertion   | Builds the sorted array one element at a time by inserting in correct spot | O(n) / O(n²) / O(n²)                 | O(1)     |
| Selection   | Selects the minimum element and places it at the beginning                 | O(n²) / O(n²) / O(n²)                | O(1)     |
| Merge Sort  | Divides the array, sorts each half, and merges them                        | O(n log n) / O(n log n) / O(n log n) | O(n)     |
| Quick Sort  | Picks a pivot, partitions array, and recursively sorts partitions          | O(n log n) / O(n log n) / O(n²)      | O(log n) |

## Bubble Sort

- Simplest sorting technique (compares ith element with i+1th element.)
- At the end of an iteration, the largest value is placed at the end of the array.
- Areas of optimization
  - Check if in any iterations, are you making any swaps?
  - If you notice, on each iteration, the search area from the end is shrinking.

```java
public static void sort(int[] arr) {
  // Outer loop: iterate through each element
  for (int i = 0; i < arr.length; i++) {
    // Inner loop: compare current element with the rest of the array
    for (int j = i + 1; j < arr.length; j++) {
      // If the current element is greater than the compared element, swap them
      if (arr[i] > arr[j]) {
        // Swap arr[i] and arr[j]
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

```

## Insertion Sort

- Works in a way humans sort a deck of cards.
- Divides an array into sorted and unsorted regions.
- In the beginning, sorted region only has the first item.
- We pick subsequent items by removing them from the unsorted region and placing them in the correct place in the sorted region.

```java
public static void sort(int[] arr) {
  // One or zero elements are already sorted
  if (arr.length <= 1) return;

  // Start from the second element (index 1)
  for (int i = 1; i < arr.length; i++) {
    int curr = arr[i];      // The element to insert
    int left = i - 1;       // Index of the last element in the sorted portion

    // Shift larger elements one position to the right
    while (left >= 0 && arr[left] > curr) {
      arr[left + 1] = arr[left];
      left--;
    }

    // Insert the current element into its correct sorted position
    arr[left + 1] = curr;
  }
}


```

## Selection Sort

- This algorithm also divides the array into sorted and unsorted parts.
- We find the smallest item in the unsorted part of the array.
- Then we swap it with the first element of the unsorted part.
- We loop through and move the boundary of the sorted part ahead one step at a time.

```java
import java.util.Arrays;

public class Selection {
  public static void sort(int[] arr) {
    // Loop to find the min in each iteration
    for (int i = 0; i < arr.length; i++) {
      // Assume the current element is the minimum.
      int minValue = arr[i];
      int minIdx = i;

      // Find the actual minimum element in the unsorted portion.
      for (int j = i + 1; j < arr.length; j++) {
        if (minValue > arr[j]) {
          minValue = arr[j];
          minIdx = j;
        }
      }

      // Swap the found min element with the correct position.
      int temp = arr[i];
      arr[i] = minValue;
      arr[minIdx] = temp;
    }
  }
}

```

## Merge Sort

- Merge Sort is a divide and conquer sorting algorithm.
- It recursively divides the array into two halves until each subarray has one element.
- Then, it merges the sorted halves by comparing the elements from the left and right subarrays.
- During merging, it picks the smaller element from the left or right subarray and places it into the original array.
- Once one of the subarrays is exhausted, the remaining elements of the other subarray are copied as they are already sorted.
- This merging continues back up the recursive call stack until the entire array is sorted.

```java
import java.util.Arrays;

public class Merge {
  // Recursively divides the array and sorts it
  public static void partition(int[] arr, int lo, int hi) {
    // Base case: a single element is already sorted
    if (lo >= hi)
      return;

    // Find the middle index
    int mid = lo + (hi - lo) / 2;

    // Recursively divide the left half
    partition(arr, lo, mid);

    // Recursively divide the right half
    partition(arr, mid + 1, hi);

    // Merge the sorted halves
    merge(arr, lo, mid, hi);
  }

  // Merges two sorted halves: [lo...mid] and [mid+1...hi]
  public static void merge(int[] arr, int lo, int mid, int hi) {
    // Create copies of the left and right halves
    int[] left = Arrays.copyOfRange(arr, lo, mid + 1);     // inclusive of mid
    int[] right = Arrays.copyOfRange(arr, mid + 1, hi + 1); // inclusive of hi

    int l = 0, r = 0;  // Pointers for left and right arrays
    int idx = lo;      // Index for the main array

    // Merge elements by comparing values from both arrays
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        arr[idx++] = left[l++];
      } else {
        arr[idx++] = right[r++];
      }
    }

    // Copy any remaining elements from the left array
    while (l < left.length) {
      arr[idx++] = left[l++];
    }

    // Copy any remaining elements from the right array
    while (r < right.length) {
      arr[idx++] = right[r++];
    }
  }
}


```

## Quick Sort

- Another divide and conquer sorting algorithm
- Selects a pivot element from the array.
- Partitions he array into two parts.
  - Elements lesser or equal to the pivot goes to the left
  - Elements greater than pivot goes to the right.
  - Pivot is now in the correct position.
- This process is recursively repeated.
- Base case is reached when the subarrays have 0 or 1 element (which is already sorted.)

```java
import java.util.Arrays;

public class Quick {

  // Partition the array and return the final index of the pivot
  public static int partition(int[] arr, int start, int end) {
    int idx = start;        // Index for placing smaller elements
    int pivot = arr[end];   // Choosing the last element as the pivot

    // Iterate over the range [start, end-1]
    for (int i = start; i < end; i++) {
      // If current element is less than pivot, swap it to the front
      if (arr[i] < pivot) {
        swap(arr, idx, i);
        idx++;
      }
    }

    // Place the pivot at its correct sorted position
    swap(arr, idx, end);

    // Return the pivot index
    return idx;
  }

  // Recursive Quick Sort function
  public static void sort(int[] arr, int start, int end) {
    // Base case: array with 1 or 0 elements is already sorted
    if (start >= end) return;

    // Partition the array and get the pivot index
    int pivot = partition(arr, start, end);

    // Recursively sort elements before and after the pivot
    sort(arr, start, pivot - 1);
    sort(arr, pivot + 1, end);
  }

  // Utility method to swap two elements
  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

```
