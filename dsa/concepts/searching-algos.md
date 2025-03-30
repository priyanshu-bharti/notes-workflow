---
topic: "Search Algorithms"
problem: "Efficiently find an element in a dataset"
difficulty: "Medium"
description: "Search algorithms are used to locate elements in a dataset. The efficiency of a search algorithm depends on the structure and sorting of the data."
use-cases: "Garbage Collection (Linear Search), Large sorted datasets (Binary Search, Jump Search)"
naive-approach: "Linear Search - Iterate through each element to find the target."
time-complexity: "Linear Search: O(N), Jump Search: O(√N), Binary Search: O(log N)"
space-complexity: "O(1)"
optimal-approach: "Binary Search is optimal for sorted data, providing O(log N) efficiency."
---

# Search Algorithms (For linear data structures)

## Linear Search (Brute Force)

- Simplest and oldest search algorithms.
- Best for small data.
- Works without preprocessing.
- Used in Garbage Collectors to find objects marked for GC.

| Time Complexity | Best Case             | Worst Case                   | Usage          |
| --------------- | --------------------- | ---------------------------- | -------------- |
| O(N)            | O(1) if item at start | O(N) if item at end / absent | Unsorted Lists |

### Implementation

```java
class LinearSearch {
  public static boolean search(int arr[], int value) {
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == value)
        return true;
    }
    return false;
  }
}
```

```mermaid
graph TD;
    Start --> Check["Set i = 0"]
    Check --> Condition["Is array.length > i\?"]
    Condition -- No --> End["Element Not Found"]
    Condition -- Yes --> Compare["arr[i] == target\?"]
    Compare -- Yes --> Found["Element Found at i"]
    Compare -- No --> Increment["i++"]
    Increment --> Condition
```

## Jump Search (Sublinear)

- More efficient than linear search (if we have sorted array).

### Implementation

```java
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

```

```mermaid
graph TD;
    A["Start"] --> B["Compute jumpAmount = sqrt(arr.length)"]
    B --> C["Set i = 0"]

    subgraph "Jump Phase"
        C --> D["For i < arr.length, i += jumpAmount"]
        D -->|"arr[i] >= needle"| E["Break (Block Found)"]
        D -->|Else| D
    end

    E --> F["Set blockEnd = min(arr.length, i + 1)"]

    subgraph "Linear Search in Block"
        F --> G["For j = max(0, i - jumpAmount); j < blockEnd; j++"]
        G -->|"arr[j] == needle"| H["Return j (Found)"]
        G -->|Else| G
    end

    G --> I["Return -1 (Not Found)"]
```

## Binary Search (Divide & Conquer)

- One of the first divide and conquer algorithms.
- Efficient for sorted lists.

| Time Complexity | Best Case           | Worst Case                               | Usage        |
| --------------- | ------------------- | ---------------------------------------- | ------------ |
| O(Log N)        | O(1) if item at mid | O(Log N) if item at either ends / absent | Sorted Lists |

### Implementation (Recursion)

```java
public class BinarySearch {
  public static int search(int arr[], int value, int lo, int hi) {
    // Base Case: Value Not Found
    if (lo > hi) {
      return -1;
    }

    // Calculate mid
    int mid = lo + (hi - lo) / 2;

    // Narrow the search space
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] > value) {
      return search(arr, value, lo, mid - 1);
    } else {
      return search(arr, value, mid + 1, hi);
    }
  }
}
```

### Implementation (Iteration)

```java
public class BinarySearch {
  public static int search(int arr[], int value) {
    int lo = 0;
    int hi = arr.length - 1;

    while (hi >= lo) {
      // Calculate mid while preventing int overflow.
      int mid = lo + (hi - lo) / 2;

      if (arr[mid] == value) {
        return mid; // Check if the mid value is the search value.
      } else if (arr[mid] > value) {
        hi = mid - 1; // If mid is larger than needle, move hi before the mid.
      } else {
        lo = mid + 1; // If mid is smaller than the needle, move lo after the mid.
      }
    }

    return -1;
  }
}
```

```mermaid
graph TD;
    A["Start with sorted array"] --> B["Pick the middle element"];

    B --> C["Is it the target?"];
    C -- "Yes" --> D["Return index (Found)"];

    C -- "No" --> E["Is it smaller?"];
    E -- "Yes" --> F["Search the right half"];
    E -- "No" --> G["Search the left half"];

    F --> B;
    G --> B;

    D --> H["Done"];
```
