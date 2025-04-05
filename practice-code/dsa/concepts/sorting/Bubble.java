package sorting;

import java.util.Arrays;

public class Bubble {
  public static void sort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }

  public static void main(String[] args) {
    int[] arr = { 8, 9, 1, 7, 2, 3, 5 };
    Bubble.sort(arr);
    System.out.println(Arrays.toString(arr));
  }
}
