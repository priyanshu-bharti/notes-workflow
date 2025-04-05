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

  @Override
  public String toString() {
    StringBuilder str = new StringBuilder();

    Node<T> currNode = head;

    str.append("HEAD <-> ");

    // Traverse while the nodes exist.
    while (currNode != null) {
      str.append(currNode.value).append(" <-> ");
      currNode = currNode.next; // Move to the next node;
    }

    str.append("NULL");

    return str.toString();
  }

  public static void main(String[] args) {
    // Create a new doubly linked list of integers
    DLL<Integer> list = new DLL<>();

    // Append elements
    list.append(10);
    list.append(20);
    list.append(30);
    System.out.println("After appending 10, 20, 30:\n" + list);

    // Prepend elements
    list.prepend(5);
    System.out.println("After prepending 5:\n" + list);

    // Insert at index
    list.insertAt(2, 15);
    System.out.println("After inserting 15 at index 2:\n" + list);

    // Get value at index
    System.out.println("Value at index 3: " + list.getValueAt(3)); // should be 20

    // Remove from start
    System.out.println("Removed from start: " + list.removeStart());
    System.out.println("After removing from start:\n" + list);

    // Remove from end
    System.out.println("Removed from end: " + list.removeEnd());
    System.out.println("After removing from end:\n" + list);

    // Remove at index
    System.out.println("Removed at index 1: " + list.removeAt(1));
    System.out.println("After removing at index 1:\n" + list);

    // Remove by value
    System.out.println("Removed value 15: " + list.removeValue(15));
    System.out.println("After trying to remove value 15:\n" + list);

    // Check final length
    System.out.println("Final length of list: " + list.length);
  }
}
