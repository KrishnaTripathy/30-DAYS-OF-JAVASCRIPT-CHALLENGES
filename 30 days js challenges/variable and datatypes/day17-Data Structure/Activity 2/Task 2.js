// 2.Use the stack class to reverse a string by pushing all chars on to the stack and then popping them off.


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
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseString(str) {
    const stack = new Stack();
    
    // Push all characters onto the stack
    for (let char of str) {
      stack.push(char);
    }
  
    let reversedStr = '';
  
    // Pop all characters from the stack
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage:
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // "olleh"
  