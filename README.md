# Overview

Welcome to my collection of notes covering essential topics for software development and system design.

This GitBook serves as a structured knowledge base, helping with quick revisions and deep dives into important concepts.

[5, 3, 8, 4, 2, 7, 1, 10]

```mermaid
flowchart TD
    A["Start: sort(arr, 0, 7)"] --> B["partition(arr, 0, 7): pivot = 10"]
    B --> C["partition result: idx = 7"]
    C --> D["sort(arr, 0, 6)"]
    D --> E["partition(arr, 0, 6): pivot = 1"]
    E --> F["partition result: idx = 0"]
    F --> G["sort(arr, 0, -1)"] --> H1["return"]
    F --> I["sort(arr, 1, 6)"]

    I --> J["partition(arr, 1, 6): pivot = 5"]
    J --> K["partition result: idx = 3"]
    K --> L["sort(arr, 1, 2)"]
    L --> M["partition(arr, 1, 2): pivot = 2"]
    M --> N["partition result: idx = 1"]
    N --> O["sort(arr, 1, 0)"] --> H2["return"]
    N --> P["sort(arr, 2, 2)"] --> H3["return"]

    K --> Q["sort(arr, 4, 6)"]
    Q --> R["partition(arr, 4, 6): pivot = 8"]
    R --> S["partition result: idx = 5"]
    S --> T["sort(arr, 4, 4)"] --> H4["return"]
    S --> U["sort(arr, 6, 6)"] --> H5["return"]

    C --> V["sort(arr, 8, 7)"] --> H6["return"]

```
---

```mermaid
sequenceDiagram
    participant Main as "Main"
    participant Sort as "sort(start, end)"
    participant Partition as "partition(start, end)"
    participant Swap as "swap(i, j)"

    Main->>Sort: sort(0, 7)
    Sort->>Partition: partition(0, 7)
    Partition->>Swap: swap(0, 0)
    Partition->>Swap: swap(1, 1)
    Partition->>Swap: swap(2, 2)
    Partition->>Swap: swap(3, 3)
    Partition->>Swap: swap(4, 4)
    Partition->>Swap: swap(5, 5)
    Partition->>Swap: swap(6, 6)
    Partition->>Swap: swap(7, 7)
    Partition-->>Sort: return idx = 7

    Sort->>Sort: sort(0, 6)
    Sort->>Partition: partition(0, 6)
    Partition->>Swap: swap(6, 0)
    Partition-->>Sort: return idx = 0

    Sort->>Sort: sort(1, 6)
    Sort->>Partition: partition(1, 6)
    Partition->>Swap: swap(1, 1)
    Partition->>Swap: swap(2, 2)
    Partition->>Swap: swap(4, 3)
    Partition->>Swap: swap(5, 4)
    Partition->>Swap: swap(6, 5)
    Partition-->>Sort: return idx = 3

    Sort->>Sort: sort(1, 2)
    Sort->>Partition: partition(1, 2)
    Partition->>Swap: swap(2, 1)
    Partition-->>Sort: return idx = 1

    Sort->>Sort: sort(4, 6)
    Sort->>Partition: partition(4, 6)
    Partition->>Swap: swap(4, 4)
    Partition->>Swap: swap(5, 5)
    Partition->>Swap: swap(6, 6)
    Partition-->>Sort: return idx = 5

```
