package stacks;

/* -------------------------------------------------------------------------- */
/*                          A Single Node for a stack                         */
/* -------------------------------------------------------------------------- */

class Node<T> {
  Node<T> prev;
  T value;

  Node(T value) {
    this.value = value;
  }
}

/* -------------------------------------------------------------------------- */
/* Actual Stack Implementation */
/* -------------------------------------------------------------------------- */
public class Stack<T> {
  /* -------------------------- Just for bookkeeping -------------------------- */
  int length;
  Node<T> top;

  /* --------------------------- Operation Functions -------------------------- */
  T peek() {
    // If the stack is empty, then don't return anything.
    if (top == null) {
      return null;
    }

    return top.value; // Return the topmost value without deletion
  }

  void push(T value) {
    // Create a new top node.
    Node<T> newNode = new Node<T>(value);

    // If the top is null, there is nothing in the stack.
    if (top != null) {
      newNode.prev = top;
    }

    top = newNode; // Update Top Reference.
    length++; // Increment the length
  }

  T pop() {
    // If there is nothing in the stack, don't delete.
    if (top == null) {
      return null;
    }

    // Get the topmost item
    Node<T> temp = top;
    top = top.prev; // Update the top reference.

    length--; // Decrement the length

    return temp.value; // Return the deleted value.
  }
}
