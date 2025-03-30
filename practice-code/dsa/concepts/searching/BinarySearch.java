public class BinarySearch {
  public static int searchIterative(int arr[], int needle) {
    int lo = 0;
    int hi = arr.length - 1;

    while (lo <= hi) {
      int mid = lo + (hi - lo) / 2;

      if (arr[mid] == needle) {
        return mid;
      } else if (needle < arr[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    return -1;
  }

  public static int searchRecursive(int arr[], int needle, int lo, int hi) {
    if (lo >= hi) {
      return -1;
    }

    int mid = lo + (hi - lo) / 2;

    if (arr[mid] == needle) {
      return mid;
    } else if (needle < arr[mid]) {
      return searchRecursive(arr, needle, lo, mid - 1);
    } else {
      return searchRecursive(arr, needle, mid + 1, hi);
    }
  }
}
