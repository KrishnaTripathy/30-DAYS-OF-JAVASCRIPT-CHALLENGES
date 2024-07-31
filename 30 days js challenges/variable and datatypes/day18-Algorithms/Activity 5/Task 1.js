// Activity 5: Dynamic Programming (optional)

// 1. Write a function to solve the fibonacci sequence using dynamic programming. log the fibonacci numbers.

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }
  
  // Example usage:
  const count = 10; // Number of Fibonacci numbers to generate
  console.log(fibonacci(count)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  