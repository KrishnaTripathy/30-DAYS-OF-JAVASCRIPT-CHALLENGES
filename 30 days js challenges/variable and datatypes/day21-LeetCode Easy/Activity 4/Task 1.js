// Activity 4: merge two sorted list

// 1.solve the "merge two sorted lists" problem on leetcode.
// write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// create a few test cases with linked lists and log the merged list.

// First, let's define a simple ListNode class to represent the linked list nodes:

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
// Now, here's the function to merge two sorted linked lists:

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result.join(' -> '));
}

// Test cases
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

l1 = createLinkedList([5, 6, 7]);
l2 = createLinkedList([1, 2, 8]);
mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList); // Output: 1 -> 2 -> 5 -> 6 -> 7 -> 8






// Explanation:

// class ListNode { ... } - Defines a ListNode class to represent nodes in the linked list.
// function mergeTwoLists(l1, l2) { ... } - Defines a function named mergeTwoLists that takes two linked lists l1 and l2 and merges them.
// const dummy = new ListNode(); - Creates a dummy node to act as the starting point of the merged list.
// let current = dummy; - Initializes a current pointer to track the current node in the merged list.
// while (l1 !== null && l2 !== null) { ... } - Iterates through both lists while neither is exhausted.
// if (l1.val < l2.val) { ... } else { ... } - Compares the current nodes of both lists and appends the smaller one to the merged list.
// current.next = l1 !== null ? l1 : l2; - Appends the remaining nodes of l1 or l2 to the merged list.
// return dummy.next; - Returns the merged list, starting from the node after the dummy node.
// function createLinkedList(arr) { ... } - Helper function to create a linked list from an array.
// function printLinkedList(list) { ... } - Helper function to print a linked list.
// Test cases - Creates linked lists, merges them using mergeTwoLists, and prints the results.





