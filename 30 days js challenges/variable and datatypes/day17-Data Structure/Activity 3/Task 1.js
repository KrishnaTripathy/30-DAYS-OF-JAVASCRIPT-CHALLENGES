// Activity 3 : Query

// 1. Implement a queue class with methods enqueue (add element), dequeue(remove element), and front (view the first element)

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.front()); // 1
  console.log(queue.dequeue()); // 1
  console.log(queue.front()); // 2

  


//   This Queue class provides:

// enqueue(element): Adds an element to the end of the queue.
// dequeue(): Removes and returns the first element of the queue.
// front(): Returns the first element of the queue without removing it.





