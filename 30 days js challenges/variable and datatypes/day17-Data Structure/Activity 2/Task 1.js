// Activity 2 : Stack

// 1. Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // 3
  console.log(stack.pop());  // 3
  console.log(stack.peek()); // 2

  


//   push(element): Adds an element to the top of the stack.
// pop(): Removes and returns the top element of the stack.
// peek(): Returns the top element of the stack without removing it.





