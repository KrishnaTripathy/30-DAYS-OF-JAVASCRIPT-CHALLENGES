// 2. write a recursive function to find the max element in an array.log the result for a few test cases.

function findMax(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], findMax(arr.slice(1)));
  }
  
  // Test cases
  console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
  console.log(findMax([10, 20, 5, 30])); // Output: 30
  console.log(findMax([-1, -5, -3]));    // Output: -1
  