package sorting;

import java.util.Arrays;

public class Insertion {
  public static void sort(int[] arr) {
    if (arr.length <= 1)
      return;

    for (int i = 1; i < arr.length; i++) {
      int curr = arr[i];
      int left = i - 1;

      // Shift elements until you reach -1
      while (left >= 0 && left > curr) {
        arr[left + 1] = arr[left];
        left--;
      }

      // Add the curr item in the 0th position.
      arr[left + 1] = curr;
    }
  }

  public static void main(String[] args) {
    int[] arr = { 8, 9, 1, 7, 2, 3, 5 };
    Insertion.sort(arr);
    System.out.println(Arrays.toString(arr));
  }
}
