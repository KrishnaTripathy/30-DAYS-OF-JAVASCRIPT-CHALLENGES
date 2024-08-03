// Activity 4: 3sum

// 1. write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return result;
  }
  console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
  console.log(threeSum([]));                    // Output: []
  console.log(threeSum([0]));                   // Output: []
  console.log(threeSum([0, 0, 0]));             // Output: [[0, 0, 0]]
  console.log(threeSum([-2, 0, 1, 1, 2]));      // Output: [[-2, 0, 2], [-2, 1, 1]]
    








//   Explanation
// Sort the Array:

// nums.sort((a, b) => a - b): Sorts the array in ascending order. This helps in easily skipping duplicates and using the two-pointer approach.
// Initialize Result Array:

// const result = []: This will store all the unique triplets that sum to zero.
// Iterate Through the Array:

// for (let i = 0; i < nums.length - 2; i++): Loop through the array up to the third last element (because we're looking for triplets).
// Skip Duplicates:

// if (i > 0 && nums[i] === nums[i - 1]) continue: Skip the current element if it’s the same as the previous one to avoid duplicate triplets.
// Two-pointer Approach:

// let left = i + 1; let right = nums.length - 1: Initialize two pointers, left and right.
// while (left < right): Continue until the two pointers meet.
// const sum = nums[i] + nums[left] + nums[right]: Calculate the sum of the current triplet.
// if (sum === 0): If the sum is zero, it's a valid triplet.
// result.push([nums[i], nums[left], nums[right]]): Add the triplet to the result.
// while (left < right && nums[left] === nums[left + 1]) left++: Skip duplicate elements on the left.
// while (left < right && nums[right] === nums[right - 1]) right--: Skip duplicate elements on the right.
// left++: Move the left pointer inward.
// right--: Move the right pointer inward.
// else if (sum < 0) left++: If the sum is less than zero, move the left pointer to increase the sum.
// else right--: If the sum is greater than zero, move the right pointer to decrease the sum.
// Return the Result:

// return result: Return the array of unique triplets.

// [-1, 0, 1, 2, -1, -4]: The unique triplets that sum to zero are [-1, -1, 2] and [-1, 0, 1].
// []: An empty array returns an empty array.
// [0]: An array with a single element cannot form a triplet, so it returns an empty array.
// [0, 0, 0]: The unique triplet that sums to zero is [0, 0, 0].
// [-2, 0, 1, 1, 2]: The unique triplets that sum to zero are [-2, 0, 2] and [-2, 1, 1].
// This simplified solution uses sorting and the two-pointer technique to efficiently find triplets, maintaining a time complexity of O(n^2).