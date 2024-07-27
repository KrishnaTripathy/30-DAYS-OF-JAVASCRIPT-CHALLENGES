//  2 . Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.


function createCounter() {
    let count = 0; // Private counter
  
    return {
      increment() {
        count++;
      },
      getValue() {
        return count;
      }
    };
  }
  
  // Create a counter instance
  const counter = createCounter();
  
  // Increment the counter
  counter.increment();
  counter.increment();
  
  // Get and log the current value of the counter
  console.log(counter.getValue()); // 2











  

// ### Explanation

// 1. **Closure Creation**

//     ```javascript
//     function createCounter() {
//       let count = 0; // Private counter

//       return {
//         increment() {
//           count++;
//         },
//         getValue() {
//           return count;
//         }
//       };
//     }
//     ```
//     - `createCounter()`: Defines a function that initializes a private `count` variable.
//     - Returns an object with `increment` and `getValue` methods. The `increment` method increases `count`, and the `getValue` method returns the current value of `count`.

// 2. **Create Counter Instance**

//     ```javascript
//     const counter = createCounter();
//     ```
//     - Calls `createCounter` to create an instance of the counter with private state.

// 3. **Increment and Get Value**

//     ```javascript
//     counter.increment();
//     counter.increment();
//     console.log(counter.getValue()); // 2
//     ```
//     - Calls `increment` twice to increase the counter value.
//     - Calls `getValue` to log the current value of the counter.
  