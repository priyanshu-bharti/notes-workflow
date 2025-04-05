# Sorting Algorithms

## Bubble Sort

```java
  public static void sort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = i + 1; j < arr.length; j++) {
        // Compare and swap
        if (arr[i] > arr[j]) {
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
```

## Insertion Sort

```java

  public static void sort(int[] arr) {
    // One element is always sorted.
    if (arr.length <= 1) return;

    for (int i = 1; i < arr.length; i++) {
      int curr = arr[i]; // Second element
      int left = i - 1; // First element

      // Shift elements until you reach -1
      while (left >= 0 && left > curr) {
        arr[left + 1] = arr[left];
        left--;
      }

      // Add the curr item in the 0th position.
      arr[left + 1] = curr;
    }
  }

```

## Selection Sort

```java
package sorting;

import java.util.Arrays;

public class Selection {
  public static void sort(int[] arr) {
    // Loop to find the min in each iteration
    for (int i = 0; i < arr.length; i++) {
      // Store the value and the index of the min element
      int minValue = arr[i];
      int minIdx = i;

      // From second index, which is the min value?
      for (int j = i + 1; j < arr.length; j++) {
        if (minValue > arr[j]) {
          minValue = arr[j];
          minIdx = j;
        }
      }

      // Swap the curr min value with the first position and so on...
      int temp = arr[i];
      arr[i] = minValue;
      arr[minIdx] = temp;
    }
  }
}

```

## Merge Sort

```java
import java.util.Arrays;

public class Merge {
  public static void partition(int[] arr, int lo, int hi) {
    if (lo >= hi)
      return;

    int mid = lo + (hi - lo) / 2;
    partition(arr, lo, mid);
    partition(arr, mid + 1, hi);
    merge(arr, lo, mid, hi);
  }

  public static void merge(int[] arr, int lo, int mid, int hi) {
    int[] left = Arrays.copyOfRange(arr, lo, mid + 1);
    int[] right = Arrays.copyOfRange(arr, mid + 1, hi + 1);

    int l = 0, r = 0;
    int idx = lo;

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        arr[idx++] = left[l++];
      } else {
        arr[idx++] = right[r++];
      }
    }

    while (l < left.length) {
      arr[idx++] = left[l++];
    }

    while (r < right.length) {
      arr[idx++] = right[r++];
    }
  }
}

```

## Quick Sort

```java
import java.util.Arrays;

public class Quick {
  public static int partition(int[] arr, int start, int end) {
    int idx = start;
    int pivot = arr[end];

    for (int i = start; i < end; i++) {
      if (arr[i] < pivot) {
        swap(arr, idx, i);
        idx++;
      }
    }

    swap(arr, idx, end);
    return idx;
  }

  public static void sort(int[] arr, int start, int end) {
    if (start >= end) return;

    int pivot = partition(arr, start, end);
    sort(arr, start, pivot - 1);
    sort(arr, pivot + 1, end);
  }

  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
```
