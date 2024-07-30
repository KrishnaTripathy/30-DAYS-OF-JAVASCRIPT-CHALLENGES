// Activity 1 : Basic Recursion

// 1. Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Test cases
  console.log(factorial(5)); // Output: 120
  console.log(factorial(3)); // Output: 6
  console.log(factorial(0)); // Output: 1
  