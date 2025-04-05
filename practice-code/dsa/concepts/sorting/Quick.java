package sorting;

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

  public static void main(String[] args) {
    int[] arr = { 8, 9, 1, 7, 2, 3, 5 };
    Quick.sort(arr, 0, arr.length);
    System.out.println(Arrays.toString(arr));
  }
}
