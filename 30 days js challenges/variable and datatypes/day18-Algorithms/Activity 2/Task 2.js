// 2. Implement the binary search algorithim to find a target value in a sorted array. log the index of the target value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid; // Target found, return index
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const numbers = [1, 3, 5, 7, 9, 11];
  const target = 7;
  const index = binarySearch(numbers, target);
  console.log(index); // 3

  




//   binarySearch(arr, target): Searches for the target value in the sorted array arr using binary search and returns its index. If the target is not found, it returns -1. The console.log statement prints the index of the target value.





