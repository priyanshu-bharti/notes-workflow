package sorting;

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

  public static void main(String[] args) {
    int[] arr = { 8, 9, 1, 7, 2, 3, 5 };
    Merge.partition(arr, 0, arr.length - 1);
    System.out.println(Arrays.toString(arr));
  }
}
