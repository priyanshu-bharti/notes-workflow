package queue;

/* -------------------------------------------------------------------------- */
/*                         A Single Node for the Queue                        */
/* -------------------------------------------------------------------------- */
class Node<T> {
  public T value;
  public Node<T> next;

  public Node(T value) {
    this.value = value;
  }
}

/* -------------------------------------------------------------------------- */
/* Actual Queue Itself */
/* -------------------------------------------------------------------------- */
public class Queue<T> {
  /* ---------------------- Just for bookkeeping stuff... --------------------- */
  int length;
  Node<T> head;
  Node<T> tail;

  /* ------------------------------- Constructor ------------------------------ */
  public Queue() {
    length = 0;
    head = tail = null;
  }

  /* -------------------- Return the value set for deletion ------------------- */
  T peek() {
    return head.value; // Return the value to be deleted without deleting it.
  }

  /* ------------------------ Add an item to the queue ------------------------ */
  void enqueue(T value) {
    // Create a new node.
    Node<T> newNode = new Node<T>(value);

    // Check if there is a node in the queue.
    if (tail == null) {
      tail = head = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    length++;
  }

  /* ---------------------- Remove an item from the queue --------------------- */
  T dequeue() {
    if (head == null) {
      return null;
    } else {
      T value = head.value;
      head = head.next;

      if (head == null) {
        head = tail = null;
      }

      length--;
      return value;
    }
  }
}
