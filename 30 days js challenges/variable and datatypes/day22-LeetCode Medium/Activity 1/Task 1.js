// Activity 1: Add Two Numbers

// 1. solve the "add two numbers" problem on leetcode.
// write a function that takes 2 non-empty linked lists representing 2 non-negative integers. the 
// digits are stored in reverse order , and each node contains a single digit. add the 2 nos. and return the sum as a linked list.
// create a few test cases with linked lists and log the sum as a linked list.


// ListNode Class Definition
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }

//   Add Two Numbers Function
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;
  
    while (l1 || l2 || carry) {
      let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
      l1 = l1?.next || null;
      l2 = l2?.next || null;
    }
  
    return dummyHead.next;
  }

//   Test cases

  // Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    arr.forEach(num => {
      current.next = new ListNode(num);
      current = current.next;
    });
    return dummyHead.next;
  }
  
  // Helper function to print a linked list
  function printLinkedList(node) {
    let result = [];
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    console.log(result.join(' -> '));
  }
  
  // Test Case 1
  let l1 = createLinkedList([2, 4, 3]);
  let l2 = createLinkedList([5, 6, 4]);
  let result = addTwoNumbers(l1, l2);
  printLinkedList(result); // Output: 7 -> 0 -> 8
  
  // Test Case 2
  l1 = createLinkedList([0]);
  l2 = createLinkedList([0]);
  result = addTwoNumbers(l1, l2);
  printLinkedList(result); // Output: 0
  
  // Test Case 3
  l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
  l2 = createLinkedList([9, 9, 9, 9]);
  result = addTwoNumbers(l1, l2);
  printLinkedList(result); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

  
//   This version uses optional chaining (?.) to simplify the null checks within the addTwoNumbers function and uses the forEach method for creating linked lists. The code is more concise and easy to follow.



// Absolutely, let's break down the code thoroughly:

// ### ListNode Class Definition

// ```javascript
// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// ```

// - `class ListNode`: Defines a class called `ListNode` to represent a node in a linked list.
// - `constructor(val = 0, next = null)`: Constructor method to initialize a new instance of `ListNode`.
//   - `val = 0`: Initializes the value of the node. Defaults to `0` if no value is provided.
//   - `next = null`: Initializes the reference to the next node in the list. Defaults to `null` if no next node is provided.

// ### Add Two Numbers Function

// ```javascript
// function addTwoNumbers(l1, l2) {
//   let dummyHead = new ListNode();
//   let current = dummyHead;
//   let carry = 0;

//   while (l1 || l2 || carry) {
//     let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
//     carry = Math.floor(sum / 10);
//     current.next = new ListNode(sum % 10);
//     current = current.next;
//     l1 = l1?.next || null;
//     l2 = l2?.next || null;
//   }

//   return dummyHead.next;
// }
// ```

// - `function addTwoNumbers(l1, l2)`: Defines a function that takes two linked lists, `l1` and `l2`, and returns their sum as a new linked list.
// - `let dummyHead = new ListNode()`: Creates a dummy node to simplify the handling of edge cases. This dummy node will be the start of our resultant linked list.
// - `let current = dummyHead`: Creates a pointer `current` to traverse and build the resultant linked list. It starts at `dummyHead`.
// - `let carry = 0`: Initializes a variable `carry` to handle the carry-over value when summing digits.

// #### Loop through the Lists
// ```javascript
//   while (l1 || l2 || carry) {
// ```
// - `while (l1 || l2 || carry)`: Continues the loop as long as there are nodes left in either `l1` or `l2` or there is a non-zero carry value.

// #### Calculate the Sum of Current Digits and Carry
// ```javascript
//     let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
// ```
// - `let sum = (l1?.val || 0) + (l2?.val || 0) + carry`: Computes the sum of the current digits of `l1` and `l2`, along with the carry. 
//   - `l1?.val || 0`: Uses the value of the current node of `l1` if it exists, otherwise `0`.
//   - `l2?.val || 0`: Uses the value of the current node of `l2` if it exists, otherwise `0`.
//   - `carry`: Adds the carry from the previous iteration.

// #### Calculate the New Carry
// ```javascript
//     carry = Math.floor(sum / 10);
// ```
// - `carry = Math.floor(sum / 10)`: Updates the carry. If the sum is greater than or equal to 10, carry will be `1`; otherwise, it will be `0`.

// #### Create the Next Node in the Result List
// ```javascript
//     current.next = new ListNode(sum % 10);
// ```
// - `current.next = new ListNode(sum % 10)`: Creates a new node with the value `sum % 10` (the digit in the units place of `sum`) and appends it to the result list.

// #### Move to the Next Node
// ```javascript
//     current = current.next;
//     l1 = l1?.next || null;
//     l2 = l2?.next || null;
// ```
// - `current = current.next`: Moves the `current` pointer to the newly created node.
// - `l1 = l1?.next || null`: Moves the `l1` pointer to the next node if it exists, otherwise sets it to `null`.
// - `l2 = l2?.next || null`: Moves the `l2` pointer to the next node if it exists, otherwise sets it to `null`.

// #### Return the Result List
// ```javascript
//   return dummyHead.next;
// ```
// - `return dummyHead.next`: Returns the result linked list, which starts at `dummyHead.next` (skipping the dummy node).

// ### Test Cases

// #### Helper Function to Create a Linked List from an Array
// ```javascript
// function createLinkedList(arr) {
//   let dummyHead = new ListNode();
//   let current = dummyHead;
//   arr.forEach(num => {
//     current.next = new ListNode(num);
//     current = current.next;
//   });
//   return dummyHead.next;
// }
// ```

// - `function createLinkedList(arr)`: Defines a function that takes an array `arr` and returns a linked list.
// - `let dummyHead = new ListNode()`: Creates a dummy node to start the linked list.
// - `let current = dummyHead`: Sets a pointer `current` to the dummy node.
// - `arr.forEach(num => { ... })`: Iterates over each element in the array.
//   - `current.next = new ListNode(num)`: Creates a new node with the current element and appends it to the list.
//   - `current = current.next`: Moves the `current` pointer to the newly created node.
// - `return dummyHead.next`: Returns the linked list starting from the first real node (skipping the dummy node).

// #### Helper Function to Print a Linked List
// ```javascript
// function printLinkedList(node) {
//   let result = [];
//   while (node) {
//     result.push(node.val);
//     node = node.next;
//   }
//   console.log(result.join(' -> '));
// }
// ```

// - `function printLinkedList(node)`: Defines a function that takes a linked list `node` and prints its elements.
// - `let result = []`: Initializes an empty array to store the values of the nodes.
// - `while (node) { ... }`: Iterates over each node in the linked list.
//   - `result.push(node.val)`: Adds the value of the current node to the `result` array.
//   - `node = node.next`: Moves to the next node.
// - `console.log(result.join(' -> '))`: Joins the elements of the `result` array with ' -> ' and prints the resulting string.

// #### Test Case 1
// ```javascript
// let l1 = createLinkedList([2, 4, 3]);
// let l2 = createLinkedList([5, 6, 4]);
// let result = addTwoNumbers(l1, l2);
// printLinkedList(result); // Output: 7 -> 0 -> 8
// ```
// - Creates two linked lists from arrays `[2, 4, 3]` and `[5, 6, 4]`.
// - Calls `addTwoNumbers` to add the two linked lists.
// - Prints the result, which should be `7 -> 0 -> 8`.

// #### Test Case 2
// ```javascript
// l1 = createLinkedList([0]);
// l2 = createLinkedList([0]);
// result = addTwoNumbers(l1, l2);
// printLinkedList(result); // Output: 0
// ```
// - Creates two linked lists from arrays `[0]` and `[0]`.
// - Calls `addTwoNumbers` to add the two linked lists.
// - Prints the result, which should be `0`.

// #### Test Case 3
// ```javascript
// l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
// l2 = createLinkedList([9, 9, 9, 9]);
// result = addTwoNumbers(l1, l2);
// printLinkedList(result); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
// ```
// - Creates two linked lists from arrays `[9, 9, 9, 9, 9, 9, 9]` and `[9, 9, 9, 9]`.
// - Calls `addTwoNumbers` to add the two linked lists.
// - Prints the result, which should be `8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1`.