// Activity 1 : Two Sum 

// 1. Solve the "Two Sum" problem on LeetCode.
// write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.log the incides for a few test cases.

function twoSum(nums, target) {
    const map = new Map();
    // Creates a new Map to store the numbers and their indices.

    for (let i = 0; i < nums.length; i++) {
        // Loops through the array of numbers.

        const complement = target - nums[i];
        // Calculates the complement, which is the number needed to reach the target when added to nums[i].

        if (map.has(complement)) {
            // Checks if the complement is already in the map.

            return [map.get(complement), i];
            // If it is, returns the indices of the complement and the current number.
        }

        map.set(nums[i], i);
        // If the complement is not in the map, adds the current number and its index to the map.
    }

    return [];
    // Returns an empty array if no two numbers add up to the target.
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// The numbers 2 and 7 add up to 9, and their indices are 0 and 1.

console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
// The numbers 2 and 4 add up to 6, and their indices are 1 and 2.

console.log(twoSum([3, 3], 6)); // Output: [0, 1]
// The numbers 3 and 3 add up to 6, and their indices are 0 and 1.
