// 3. Implement the quicksort algorithim to sort an array of numbers in ascending order. Log the sorted array.


function quicksort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quicksort(left), ...middle, ...quicksort(right)];
  }
  
  // Example usage:
  const numbers = [3, 6, 8, 10, 1, 2, 1];
  console.log(quicksort(numbers)); // [1, 1, 2, 3, 6, 8, 10]

  

//   quicksort(arr): Recursively sorts the input array arr by partitioning it around a pivot and concatenating the sorted sub-arrays. The console.log statement prints the sorted array.





