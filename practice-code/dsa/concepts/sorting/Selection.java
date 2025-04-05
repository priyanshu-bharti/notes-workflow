package sorting;

import java.util.Arrays;

public class Selection {
  public static void sort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      int minValue = arr[i];
      int minIdx = i;

      for (int j = i + 1; j < arr.length; j++) {
        if (minValue > arr[j]) {
          minValue = arr[j];
          minIdx = j;
        }
      }

      int temp = arr[i];
      arr[i] = minValue;
      arr[minIdx] = temp;
    }
  }

  public static void main(String[] args) {
    int[] arr = { 8, 9, 1, 7, 2, 3, 5 };
    Selection.sort(arr);
    System.out.println(Arrays.toString(arr));
  }
}
