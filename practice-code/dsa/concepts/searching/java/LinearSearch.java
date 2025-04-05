package searching;
class LinearSearch {
  public static int search(int arr[], int needle) {
    for (int i : arr) {
      if (i == needle) {
        return i;
      }
    }

    return -1;
  }

  public static void main(String[] args) {
    int arr[] = { 1, 2, 3, 4 };
    search(arr, 2);
  }
}
