// Activity 4: Recursive Search

// 1. write a recursive function to perform a binary search on a sorted array. log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
  }
  
  // Test cases
  console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
  console.log(binarySearch([10, 20, 30, 40, 50], 40)); // Output: 3
  console.log(binarySearch([5, 15, 25, 35, 45], 10)); // Output: -1
  