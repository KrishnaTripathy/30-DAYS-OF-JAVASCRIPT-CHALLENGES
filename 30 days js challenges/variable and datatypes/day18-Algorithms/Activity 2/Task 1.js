// Activity 2 : Searching algorithim

//1. Implement the linear search algorithim to find a target value in an array. log the index of the target value.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Target found, return index
      }
    }
    return -1; // Target not found
  }
  
  // Example usage:
  const numbers = [10, 20, 30, 40, 50];
  const target = 30;
  const index = linearSearch(numbers, target);
  console.log(index); // 2

  



//   linearSearch(arr, target): Searches for the target value in the array arr and returns its index. If the target is not found, it returns -1. The console.log statement prints the index of the target value.





