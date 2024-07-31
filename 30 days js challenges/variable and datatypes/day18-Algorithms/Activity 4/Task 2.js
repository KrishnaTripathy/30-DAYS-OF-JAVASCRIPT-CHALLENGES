// 2. write a function to merge two sorted arrays into one sorted array.Log the merged array.

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const merged = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }
  
    // Add remaining elements from arr1 or arr2
    merged.push(...arr1.slice(i));
    merged.push(...arr2.slice(j));
  
    console.log(merged);
  }
  
  // Example usage:
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  mergeSortedArrays(array1, array2); // [1, 2, 3, 4, 5, 6, 7, 8]

  




//   mergeSortedArrays(arr1, arr2): Merges two sorted arrays arr1 and arr2 into one sorted array. It iterates through both arrays, comparing elements, and then adds any remaining elements from either array. The console.log statement prints the merged array.