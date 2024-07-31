// Activity 4 : Array Algorithims

// 1. write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k > n
    const rotated = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(rotated);
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  rotateArray(array, k); // [5, 6, 7, 1, 2, 3, 4]

  

//   rotateArray(arr, k): Rotates the array arr by k positions to the right. It uses array slicing to handle the rotation and then concatenates the slices to form the rotated array. The console.log statement prints the rotated array.