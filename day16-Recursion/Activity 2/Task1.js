// Activity 2 : Recursion with Arrays

// 1. Write a recursive function to find the sum of all elements in an array.log the result for a few test cases.

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }
  
  // Test cases
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  console.log(sumArray([10, 20, 30]));    // Output: 60
  console.log(sumArray([]));              // Output: 0
  