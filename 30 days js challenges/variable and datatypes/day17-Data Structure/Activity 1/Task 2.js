// 2. Implement a LinkList class with methods to add a node to the end, remove a nodefrom the end, and display all nodes.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove() {
      if (!this.head) return null;
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.display(); // 1 2 3
  list.remove();
  list.display(); // 1 2

  



//   This LinkedList class provides:

// add(value): Adds a node with the given value to the end.
// remove(): Removes the node from the end.
// display(): Displays all nodes' values in the list.





