// Activity 3: Trapping Rain water

// 1. solve the "trapping rain water" problem on leetcode.
// write a function that takes an array of non-negative integers representing an elevation map
// where the width of each bar is 1, and computes how much water it can trap after raining.
// log the amount of trapped water for a few test cases.

function trap(height) {
    let left = 0, right = height.length - 1;
    let left_max = 0, right_max = 0;
    let water = 0;

    while (left <= right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                water += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                water += right_max - height[right];
            }
            right--;
        }
    }

    return water;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 0, 2])); // Output: 1








// Explanation
// Initialize Pointers:

// Use two pointers: one starting at the beginning (left) and one at the end (right) of the elevation map.
// Also, keep track of the maximum heights encountered from both sides with left_max and right_max.
// Calculate Water Trapped:

// Move the pointers towards each other.
// At each step, compare the heights at the left and right pointers.
// Update the left_max or right_max as needed.
// Calculate trapped water based on the smaller of the two maximum heights and the current height.
// Continue Until Pointers Meet:

// Keep updating the water trapped as you move the pointers.
// Code