// Activity 2: Merge k Sorted Lists

// 2. Solve the "Merge k sorted lists" problem on leetcode.
// write a function that takes an array of k linked lists, each linked list is sorted in 
// ascending order , and merges all the linked list into one sorted linked list.
//create a few test cases with linked lists and log the merged list.



const { MinHeap } = require('heap-js'); // Use a min-heap library or implement your own

function mergeKLists(lists) {
    const minHeap = new MinHeap((a, b) => a.val - b.val);
    const dummy = new ListNode(0);
    let current = dummy;

    // Initialize the heap with the first node of each list
    for (let list of lists) {
        if (list) minHeap.push(list);
    }

    // Process the heap
    while (minHeap.size() > 0) {
        const node = minHeap.pop();
        current.next = node;
        current = current.next;

        if (node.next) minHeap.push(node.next);
    }

    return dummy.next;
}

// Helper function to create and print linked lists
function printList(node) {
    let result = '';
    while (node) {
        result += node.val + ' -> ';
        node = node.next;
    }
    console.log(result.slice(0, -4)); // Remove the last arrow
}

// Test cases
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Input: [[1,4,5], [1,3,4], [2,6]]
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Input: [[], [1, 2, 3], [4, 5, 6]]
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

// Input: [[], [], []]
// Output: (empty list)

// explanation

// Use a Min-Heap:

// A min-heap is used to keep track of the smallest current elements from each list.
// Heap Initialization:

// Insert the first element of each linked list into the heap.
// Extract Min and Insert Next:

// Repeatedly extract the smallest element from the heap and add it to the merged list.
// Insert the next element from the same list into the heap.
// Continue Until Empty:

// Continue the process until the heap is empty, meaning all elements from all lists have been merged.