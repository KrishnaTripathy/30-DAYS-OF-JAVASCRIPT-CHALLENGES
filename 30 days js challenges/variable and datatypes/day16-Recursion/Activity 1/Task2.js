// 2. write a recursive function to calculate the nth Fibonacci number.Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Test cases
  console.log(fibonacci(5));  // Output: 5
  console.log(fibonacci(7));  // Output: 13
  console.log(fibonacci(10)); // Output: 55
  