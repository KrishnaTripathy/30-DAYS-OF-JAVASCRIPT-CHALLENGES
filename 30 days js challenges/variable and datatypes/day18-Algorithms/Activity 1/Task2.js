// 2. Implement the selection sort algorithim to sort an array of numbers in ascending order. Log the sorted array.


function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap elements
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  
  // Example usage:
  const numbers = [64, 25, 12, 22, 11];
  console.log(selectionSort(numbers)); // [11, 12, 22, 25, 64]

  


//   selectionSort(arr): Sorts the input array arr in ascending order using the selection sort algorithm and returns the sorted array. The console.log statement prints the sorted array.





