class SortingAlgorithms {
  public static insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i];
      let left = i - 1;

      while (left >= 0 && arr[left] > curr) {
        arr[left + 1] = arr[left];
        left--;
      }

      arr[left + 1] = curr;
    }
  }
}

const arr = [9, 1, 7, 2, 3, 5];

SortingAlgorithms.insertionSort(arr);
console.log(arr);
