// 2. write a recusive function to count the occurrences of a target element in an array. log the result for a few test cases.

function countOccurrences(arr, target, index = 0) {
    if (index === arr.length) return 0;
    return (arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1);
  }
  
  // Test cases
  console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: 3
  console.log(countOccurrences([10, 20, 30, 20, 20], 20)); // Output: 3
  console.log(countOccurrences([5, 15, 25], 10)); // Output: 0
  