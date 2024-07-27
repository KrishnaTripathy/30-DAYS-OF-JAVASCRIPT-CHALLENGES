// Activity 5 :  Memoization

// 1. Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {}; // Private cache to store results
  
    return function(arg) {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg); // Compute and store the result if not in cache
      }
      return cache[arg]; // Return the cached result
    };
  }
  
  // Example usage
  const slowFunction = (num) => {
    console.log('Computing...');
    return num * 2;
  };
  
  const memoizedFunction = memoize(slowFunction);
  
  console.log(memoizedFunction(5)); // Computing... 10
  console.log(memoizedFunction(5)); // 10 (cached result)

  








  
// ```

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

// 2. **Example Usage**

//     ```javascript
//     const slowFunction = (num) => {
//       console.log('Computing...');
//       return num * 2;
//     };

//     const memoizedFunction = memoize(slowFunction);
//     ```

//     - `const slowFunction = (num) => { ... };`: Defines a slow function that prints `Computing...` and returns `num * 2`.
//     - `const memoizedFunction = memoize(slowFunction);`: Creates a memoized version of `slowFunction`.

// 3. **Call and Log Results**

//     ```javascript
//     console.log(memoizedFunction(5)); // Computing... 10
//     console.log(memoizedFunction(5)); // 10 (cached result)
//     ```

//     - `console.log(memoizedFunction(5));`: Calls `memoizedFunction` with `5`. The first call computes and prints `Computing...` and returns `10`.
//     - The second call with the same argument returns the cached result `10` without computing again.