public class JumpSearch {
  public static int search(int[] arr, int needle) {
    int jumpAmount = (int) Math.sqrt(arr.length);
    int i = 0;

    // Find the correct block
    for (; i < arr.length; i += jumpAmount) {
      if (arr[i] >= needle) {
        break;
      }
    }

    // Include i (prevent off by one)
    int blockEnd = Math.min(arr.length, i + 1);

    // For loop for the next block.
    for (int j = Math.max(0, i - jumpAmount); j < blockEnd; j++) {
      if (arr[j] == needle)
        return j;
    }

    return -1;
  }
}
