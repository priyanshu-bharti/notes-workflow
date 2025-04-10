## Array vs Linked List

| Arrays                                | Linked List                              |
| ------------------------------------- | ---------------------------------------- |
| Fixed Size                            | Growable                                 |
| Random Access                         | Sequential Access                        |
| Setting value in any location is O(1) | Setting is O(1) but to get there is O(N) |
| Shifting and Unshifting sucks         | Traversing Sucks,                        |

## What are ArrayLists?

- Like a regular array but with a trick.
- When the array is filled entirely, A new array 2x the size of the current one is created, and all the contents inside are copied.
- Arrays in Python and JS are ArrayLists, meaning they can grow and shrink and once the capacity is full, size gets doubled.
