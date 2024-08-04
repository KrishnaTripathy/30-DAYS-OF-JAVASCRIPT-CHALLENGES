// Activity 1: Median of Two Sorted Arrays

// 1. solve the "median of two sorted arrays" problem on leetcode.
// write a function that takes 2 sorted arrays of integers and returns the median of the 2 sorted arrays.
// log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
    const merge = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = merge.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        return (merge[mid - 1] + merge[mid]) / 2;
    } else {
        return merge[mid];
    }
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2]));           // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4]));       // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0]));       // Output: 0
console.log(findMedianSortedArrays([], [1]));              // Output: 1
console.log(findMedianSortedArrays([2], []));              // Output: 2





// Certainly! Here’s a detailed explanation of how to solve the "Median of Two Sorted Arrays" problem:

// ### Explanation

// 1. **Merge the Arrays**:
//    - Combine the two sorted arrays into one larger array. This can be done using array concatenation.

// 2. **Sort the Merged Array**:
//    - Even though the individual arrays are sorted, merging them might not result in a sorted array. Therefore, sort the merged array to ensure all elements are in ascending order.

// 3. **Find the Median**:
//    - **Determine the Length**: Calculate the length of the merged array.
//    - **Calculate the Middle Index**: Compute the index that corresponds to the middle of the array. This is done using integer division by 2.
//    - **Median Calculation**:
//      - **Odd Length**: If the length of the merged array is odd, the median is the element at the middle index.
//      - **Even Length**: If the length is even, the median is the average of the two middle elements. This involves taking the values at the two central indices and calculating their average.

// ### Key Points
// - **Merging**: Combining two arrays while keeping their individual order is crucial for obtaining the correct median.
// - **Sorting**: Sorting is necessary after merging to ensure that the median is correctly identified.
// - **Median Calculation**: The median differs based on whether the total number of elements is odd or even, affecting whether you pick a single middle value or compute an average.