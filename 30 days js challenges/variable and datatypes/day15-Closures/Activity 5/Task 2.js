// 2. Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
    const cache = {}; // Private cache to store results
  
    return function(arg) {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg); // Compute and store the result if not in cache
      }
      return cache[arg]; // Return the cached result
    };
  }
  
  // Factorial function
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };
  
  // Memoized factorial function
  const memoizedFactorial = memoize(factorial);
  
  // Example usage
  console.log(memoizedFactorial(5)); // 120
  console.log(memoizedFactorial(6)); // 720 (uses cached result for factorial(5))
  console.log(memoizedFactorial(5)); // 120 (cached result)

  












// ### Explanation

// 1. **Memoization Function**

//     ```javascript
//     function memoize(fn) {
//       const cache = {}; // Private cache to store results

//       return function(arg) {
//         if (cache[arg] === undefined) {
//           cache[arg] = fn(arg); // Compute and store the result if not in cache
//         }
//         return cache[arg]; // Return the cached result
//       };
//     }
//     ```
//     - `function memoize(fn) { ... }`: Defines a function `memoize` that takes a function `fn` as an argument.
//     - `const cache = {};`: Initializes a private object `cache` to store the results of previous computations.
//     - `return function(arg) { ... }`: Returns a new function that takes a single argument `arg`.
//     - `if (cache[arg] === undefined) { ... }`: Checks if the result for the given argument is not already in the cache.
//     - `cache[arg] = fn(arg);`: If the result is not cached, calls `fn` with the argument and stores the result in the cache.
//     - `return cache[arg];`: Returns the cached result.

// 2. **Factorial Function**

//     ```javascript
//     const factorial = (n) => {
//       if (n <= 1) return 1;
//       return n * factorial(n - 1);
//     };
//     ```
//     - `const factorial = (n) => { ... };`: Defines a recursive function `factorial` that calculates the factorial of `n`.
//     - `if (n <= 1) return 1;`: Returns `1` if `n` is `0` or `1` (base case).
//     - `return n * factorial(n - 1);`: Recursively calls `factorial` with `n - 1` and multiplies the result by `n`.

// 3. **Memoized Factorial Function**

//     ```javascript
//     const memoizedFactorial = memoize(factorial);
//     ```
//     - `const memoizedFactorial = memoize(factorial);`: Creates a memoized version of the `factorial` function.

// 4. **Example Usage**

//     ```javascript
//     console.log(memoizedFactorial(5)); // 120
//     console.log(memoizedFactorial(6)); // 720 (uses cached result for factorial(5))
//     console.log(memoizedFactorial(5)); // 120 (cached result)
//     ```
//     - `console.log(memoizedFactorial(5));`: Calls `memoizedFactorial` with `5`. The first call computes the factorial and returns `120`.
//     - `console.log(memoizedFactorial(6));`: Calls `memoizedFactorial` with `6`. This uses the cached result for `factorial(5)` and returns `720`.
//     - `console.log(memoizedFactorial(5));`: Calls `memoizedFactorial` with `5` again and returns the cached result `120`.