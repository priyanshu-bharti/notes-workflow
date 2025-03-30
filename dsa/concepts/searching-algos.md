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
  public static int search(int arr[], int value) {
    int jumpSize = (int) Math.sqrt(arr.length);
    int prev = 0;

    // Jumping in blocks of sqrt(arr.length)
    // Ensure prev idx is behind the arr length and the needle is still ahead.
    while (prev < arr.length && arr[prev] < value) {
      int next = prev + jumpSize;

      // Ensure we don't go out of bounds and stop early if we found the needle.
      if (next >= arr.length || arr[next] >= value) {

        // Check next is within bounds and also if next idx is the needle.
        if (next < arr.length && arr[next] == value) {
          return next;
        }
        break;
      }

      // Update the prev idx to move to the next jump block and begin search
      prev = next;
    }

    for (int i = prev; i < Math.min(arr.length, prev + jumpSize); i++) {
      if (arr[i] == value) {
        return i;
      }
    }

    return -1;
  }
}
```

```mermaid
graph TD;
    A["Start"] --> B["Compute jumpSize = sqrt(arr.length)"];
    B --> C["Set prev = 0"];

    C --> D["Jump while arr[prev] < value"];
    D -->|Jump| E["Set next = prev + jumpSize"];
    E --> F["Check next index"];

    F -->|Found value| G["Return next"];
    F -->|Not found| H["Perform Linear Search in Block"];

    H --> I["Does arr[i] == value?"];
    I -->|Yes| J["Return i"];
    I -->|No| K["End of Block?"];
    K -->|Yes| L["Return -1 (Not Found)"];
    K -->|No| H;

    G --> End["End"];
    J --> End;
    L --> End;

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

```mermaid
graph TD;
    A["Start (lo, hi)"] --> B["Check if lo > hi"];
    B -- "Yes" --> C["Return -1 (Not Found)"];
    B -- "No" --> D["Calculate mid = lo + (hi - lo) / 2"];

    D --> E["arr[mid] == value?"];
    E -- "Yes" --> F["Return mid (Found)"];
    E -- "No" --> G["arr[mid] > value?"];

    G -- "Yes" --> H["Call search(arr, value, lo, mid - 1)"];
    G -- "No" --> I["Call search(arr, value, mid + 1, hi)"];

    H --> A;
    I --> A;

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
    A["Start (lo = 0, hi = arr.length - 1)"] --> B["While lo <= hi"];
    B -- "No" --> C["Return -1 (Not Found)"];
    B -- "Yes" --> D["Calculate mid = lo + (hi - lo) / 2"];

    D --> E["arr[mid] == value?"];
    E -- "Yes" --> F["Return mid (Found)"];
    E -- "No" --> G["arr[mid] > value?"];

    G -- "Yes" --> H["hi = mid - 1"];
    G -- "No" --> I["lo = mid + 1"];

    H --> B;
    I --> B;

```
