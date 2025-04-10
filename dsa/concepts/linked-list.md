## What is a linked list

- Node based data structure
- Linked lists are linear arrangement of nodes
- Store references to next (and previous nodes in case of doubly linked list.)
- There are 2 pointers head and tail to track the start and the end of a list.
- Newly created nodes are assigned memory from the heap.

```mermaid
graph LR
    A["NULL"]
    B["prev | data: 10 | next"]
    C["prev | data: 20 | next"]
    D["prev | data: 30 | next"]
    E["NULL"]

    A --> B
    B --> C
    C --> D
    D --> E

    B -->|prev| A
    C -->|prev| B
    D -->|prev| C
    E -->|prev| D
```

```ts
interface Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
}
```

## Operations of a linked list

| Operation Name     | Description                                 | TC                                         |
| ------------------ | ------------------------------------------- | ------------------------------------------ |
| Insert at Head     | Add a new node at the beginning of the list | O(1)                                       |
| Insert at Tail     | Add a new node at the end of the list       | O(1) if tail is maintained, O(n) otherwise |
| Insert at Position | Insert a node at a specific position        | O(n)                                       |
| Delete Head        | Remove the first node of the list           | O(1)                                       |
| Delete Tail        | Remove the last node of the list            | O(n)                                       |
| Delete at Position | Remove a node from a specific position      | O(n)                                       |
| Search             | Find a node with a specific value           | O(n)                                       |
| Traverse           | Visit all nodes in order                    | O(n)                                       |
| Reverse            | Reverse the entire linked list              | O(n)                                       |
| Get Length         | Count the number of nodes in the list       | O(n)                                       |

## Implementation

```java
/* -------------------------------------------------------------------------- */
/*                           Doubly Linked List Node                          */
/* -------------------------------------------------------------------------- */
class Node<T> {
  public T value;
  public Node<T> prev;
  public Node<T> next;

  // Constructors
  public Node(T value) {
    this.value = value;
  }
}

/* -------------------------------------------------------------------------- */
/*                      Doubly Linked List Data Structure                     */
/* -------------------------------------------------------------------------- */
public class DLL<T> {
  // Store the length of the linked list.
  public int length;

  // Head and the tail pointers
  private Node<T> head;
  private Node<T> tail;

  /* ------------ HELPER : Get the reference of a node at an index ------------ */
  private Node<T> getNodeAt(int position) {
    // Check if the position if out of bounds.
    if (position < 0 || position >= length)
      return null;

    // This will be used for iterating over the values.
    int idx = 0; // This is the index where the search begins.
    Node<T> curr = head; // Contains the reference to the current node.

    // Walking & ensure the current node isn't null & the index is within bounds.
    while (curr != null && idx < position) {
      curr = curr.next; // Get the reference of the next node.
      idx++; // Update the index to keep track
    }

    // You would have the correct node at this point.
    return curr;
  }

  /* ----------------- HELPER : Remove the node (being passed) ---------------- */
  private T removeNode(Node<T> deletionNode) {
    // Only delete when we're provided a valid node reference.
    if (deletionNode == null) {
      return null;
    }

    // Store the value of the deletion node.
    T deletedValue = deletionNode.value;

    // If the current element is the head, move the head pointer ahead.
    if (deletionNode.prev == null) {
      head = deletionNode.next;
    } else {
      deletionNode.prev.next = deletionNode.next;
    }

    // If the current element is the tail, then move the tail pointer behind.
    if (deletionNode.next == null) {
      tail = deletionNode.prev;
    } else {
      deletionNode.next.prev = deletionNode.prev;
    }

    // Unset the value of the deletion node.
    deletionNode.value = null;

    // Destroy the reference
    deletionNode = null;

    // Decrement the value
    length--;

    // Return the value.
    return deletedValue;
  }

  /* ------------------- Get the value of a node at an index ------------------ */
  public T getValueAt(int index) {
    Node<T> currNode = getNodeAt(index);
    return currNode.value;
  }

  /* ------------------------ Add the node at the start ----------------------- */
  public void prepend(T value) {
    // Create a new node
    Node<T> newNode = new Node<T>(value);

    // If the head doesn't exist, then this is the first item in the list.
    if (head == null) {
      head = tail = newNode; // Ensure head and tail are pointing to only item.
    } else {
      newNode.next = head; // Make sure head node is next to the new node.
      head.prev = newNode; // Head node's prev is the new node.
      head = newNode; // Update the node representing the head reference.
    }

    length++; // Update the length of the list.
  }

  /* ------------------------- Add the node at the end ------------------------ */
  public void append(T value) {
    // Create a new node
    Node<T> newNode = new Node<T>(value);

    // If the tail doesn't exist, then this is the first item in the list.
    if (tail == null) {
      head = tail = newNode; // Ensure tail and head point to the only item.
    } else {
      newNode.prev = tail; // Ensure tail node is prev to the new node.
      tail.next = newNode; // Ensure that tail node's next is the new node.
      tail = newNode; // Update the reference of the tail to the new node.
    }

    length++; // Update the length of the list.
  }

  /* ---------------------- Insert anywhere in the middle --------------------- */
  public void insertAt(int index, T value) {
    // Prepend at the 0th index
    if (index == 0) {
      prepend(value);
    }
    // Append if the length equals or is more than length
    else if (index >= length) {
      append(value);
    }
    // Insert anywhere in the middle
    else {
      // Get reference to the node at the current index.
      Node<T> currNode = getNodeAt(index);

      // Create a new node
      Node<T> newNode = new Node<T>(value);

      // Update previous and next references of the new node.
      newNode.prev = currNode.prev;
      newNode.next = currNode;

      // Update the next reference of the prevNode.
      currNode.prev.next = newNode;

      // Update the prev reference of the currNode.
      currNode.prev = newNode;
    }

    length++;
  }

  /* --------------------- Remove a node at the beginning. -------------------- */
  public T removeStart() {
    // If there is no head, return null since nothing can be deleted.
    if (head == null) {
      return null;
    }

    // Otherwise return the value after removing the head.
    return removeNode(head);
  }

  /* ----------------------- Remove the node and the end ---------------------- */
  public T removeEnd() {
    // If there is no tail, return null since nothing can be deleted.
    if (tail == null) {
      return null;
    }

    // Otherwise return the value after removing the tail.
    return removeNode(tail);
  }

  /* ------------------- Remove the node at a specific index ------------------ */
  public T removeAt(int index) {
    // Get the reference to the node to be deleted at the specified index.
    Node<T> deletionNode = getNodeAt(index);
    // Remove the node and return the deleted node's value.
    return removeNode(deletionNode);
  }

  /* ----------------- Remove the node with a particular value ---------------- */
  public T removeValue(T value) {
    // Create a Node reference for traversal
    Node<T> currNode = head;

    // Traverse while the nodes exist.
    while (currNode != null) {
      // If the value of the node equals the provided value, then remove the node.
      if (currNode.value.equals(value)) {
        return removeNode(currNode);
      }
      // Else just move to the next node.
      currNode = currNode.next;
    }

    // Return null if we're unable to find the value asked.
    return null;
  }
}

```
