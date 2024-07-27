// Activity 2 : Practical Closures

// 1. write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createIdGenerator() {
    let lastId = 0; // Private variable to track the last generated ID
  
    return function() {
      lastId++; // Increment the ID
      return `id-${lastId}`; // Return the new unique ID
    };
  }
  
  // Create an ID generator instance
  const generateId = createIdGenerator();
  
  // Generate and log unique IDs
  console.log(generateId()); // id-1
  console.log(generateId()); // id-2
  console.log(generateId()); // id-3










  

// ```

// ### Explanation

// 1. **Closure Creation**

//     ```javascript
//     function createIdGenerator() {
//       let lastId = 0; // Private variable to track the last generated ID

//       return function() {
//         lastId++; // Increment the ID
//         return `id-${lastId}`; // Return the new unique ID
//       };
//     }
//     ```
//     - `createIdGenerator()`: Defines a function that initializes `lastId` to `0`.
//     - Returns an inner function that increments `lastId` and returns a new unique ID in the format `id-{lastId}`.

// 2. **Create ID Generator Instance**

//     ```javascript
//     const generateId = createIdGenerator();
//     ```
//     - Calls `createIdGenerator` to create an instance of the ID generator.

// 3. **Generate and Log Unique IDs**

//     ```javascript
//     console.log(generateId()); // id-1
//     console.log(generateId()); // id-2
//     console.log(generateId()); // id-3
//     ```
//     - Calls `generateId` multiple times to generate and log unique IDs, each incrementing from the previous one.
  