// Activity 1 : Sorting Algorithims

// 1. Implement the bubble sort algorithim to sort an array of numbers in ascending order. log the sorted array.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // Example usage:
  const numbers = [5, 2, 9, 1, 5, 6];
  console.log(bubbleSort(numbers)); // [1, 2, 5, 5, 6, 9]

  
//   bubbleSort(arr): Sorts the input array arr in ascending order using the bubble sort algorithm and returns the sorted array. The console.log statement prints the sorted array.





