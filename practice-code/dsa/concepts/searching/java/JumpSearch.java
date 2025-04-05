package searching;
public class JumpSearch {
  public static int search(int[] arr, int needle) {
    int jumpAmount = (int) Math.sqrt(arr.length);
    int i = 0;

    // Find the correct block
    while (i < arr.length && arr[i] <= needle) {
      i += jumpAmount;
    }

    int start = Math.max(0, i - jumpAmount);
    int end = Math.min(arr.length, i + jumpAmount);

    // Find the exact block
    for (int j = start; j < end; j++) {
      if (arr[j] == needle) {
        return i;
      }
    }

    return -1;
  }
}
