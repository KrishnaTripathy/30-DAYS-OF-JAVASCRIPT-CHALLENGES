// Activity 3: Container with most water 

// 1. solve the "container with most water" problem on leetcode.
// write a function that takes an array of non-negative integers where each integer represents the height of a line
// drawn at each point.find two lines that together with the x-axis form a container, such that the container holds the most water.
// log the max amount of water for a few test cases.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
  
    while (left < right) {
      let currentWater = (right - left) * Math.min(height[left], height[right]);
      maxWater = Math.max(maxWater, currentWater);
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxWater;
  }

  console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1]));                // Output: 1
console.log(maxArea([4,3,2,1,4]));          // Output: 16
console.log(maxArea([1,2,1]));              // Output: 2




// Explanation
// Initialization:

// left = 0: Start pointer at the beginning of the array.
// right = height.length - 1: End pointer at the end of the array.
// maxWater = 0: Variable to store the maximum amount of water.
// Two-pointer Approach:

// while (left < right): Continue the loop until the two pointers meet.
// let currentWater = (right - left) * Math.min(height[left], height[right]): Calculate the amount of water the current container can hold.
// (right - left): Distance between the two pointers.
// Math.min(height[left], height[right]): The height of the shorter line.
// maxWater = Math.max(maxWater, currentWater): Update the maximum amount of water if the current container holds more water.
// if (height[left] < height[right]) { left++; } else { right--; }: Move the pointer pointing to the shorter line inward, as this is the only way to potentially find a taller line and thus a larger area.
// Return the Result:

// return maxWater: Return the maximum amount of water found.

// [1,8,6,2,5,4,8,3,7]: The maximum container holds 49 units of water between the heights 8 and 7.
// [1,1]: The maximum container holds 1 unit of water between the two heights 1.
// [4,3,2,1,4]: The maximum container holds 16 units of water between the heights 4 and 4.
// [1,2,1]: The maximum container holds 2 units of water between the heights 1 and 2.
// This solution uses a two-pointer approach to efficiently find the maximum area in O(n) time complexity.