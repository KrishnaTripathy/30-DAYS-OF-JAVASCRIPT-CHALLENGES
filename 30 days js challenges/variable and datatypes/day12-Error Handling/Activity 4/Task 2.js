// 2. Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects,and log the error message.
// Function that returns a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
      const succeed = Math.random() > 0.5;
      setTimeout(() => {
        if (succeed) {
          resolve("Success!");
        } else {
          reject("Failed!");
        }
      }, 1000);
    });
  }
  
  // Async function to handle the promise
  async function handlePromise() {
    try {
      const result = await randomPromise();
      console.log(result); // Logs "Success!" if resolved
    } catch (error) {
      console.log("Caught an error:", error); // Logs "Failed!" if rejected
    }
  }
  
  // Call the async function
  handlePromise();

  











//   Sure! Let's break down the example into its core components and explain each part in detail:

// ### 1. Creating a Promise

// ```javascript
// function randomPromise() {
//   return new Promise((resolve, reject) => {
//     const succeed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (succeed) {
//         resolve("Success!");
//       } else {
//         reject("Failed!");
//       }
//     }, 1000);
//   });
// }
// ```

// - **Function Definition (`randomPromise`)**:
//   - `randomPromise` is a function that returns a `Promise`.

// - **Promise Constructor (`new Promise((resolve, reject) => { ... })`)**:
//   - A `Promise` constructor takes a function with two parameters: `resolve` and `reject`.
//   - `resolve` is used to fulfill the promise with a value.
//   - `reject` is used to reject the promise with an error.

// - **Random Decision (`const succeed = Math.random() > 0.5`)**:
//   - `Math.random()` generates a random number between 0 and 1.
//   - `Math.random() > 0.5` evaluates to `true` about half the time, deciding randomly whether the promise will resolve or reject.

// - **Simulating Delay (`setTimeout`)**:
//   - `setTimeout` delays execution of the function for 1000 milliseconds (1 second) to mimic an asynchronous operation.

// - **Resolve or Reject**:
//   - If `succeed` is `true`, the promise is resolved with `"Success!"`.
//   - If `succeed` is `false`, the promise is rejected with `"Failed!"`.

// ### 2. Handling the Promise with Async/Await

// ```javascript
// async function handlePromise() {
//   try {
//     const result = await randomPromise();
//     console.log(result); // Logs "Success!" if resolved
//   } catch (error) {
//     console.log("Caught an error:", error); // Logs "Failed!" if rejected
//   }
// }

// // Call the async function
// handlePromise();
// ```

// - **Async Function Declaration (`async function handlePromise()`)**:
//   - `handlePromise` is defined as an `async` function.
//   - `async` functions allow the use of `await` inside them and return a promise implicitly.

// - **Using `await` (`const result = await randomPromise()`)**:
//   - `await` pauses the execution of the `async` function until the promise returned by `randomPromise` resolves or rejects.
//   - If the promise resolves, the value `"Success!"` is assigned to `result`.
//   - If the promise rejects, the `catch` block handles the error.

// - **Try-Catch Block**:
//   - **Try Block**:
//     - Executes the code where errors might occur.
//     - If the promise resolves successfully, `result` is logged to the console.
//   - **Catch Block**:
//     - Catches and handles errors if the promise is rejected.
//     - Logs the error message prefixed with `"Caught an error:"`.

// - **Calling the Async Function (`handlePromise()`)**:
//   - Invokes `handlePromise` to start the process.

// ### Summary

// 1. **Promise Creation**:
//    - Creates a promise that resolves or rejects randomly with a delay.

// 2. **Async Function**:
//    - `async` function uses `await` to handle the promise's result.
//    - The `try` block manages successful results.
//    - The `catch` block handles errors.

// 3. **Error Handling**:
//    - The `try-catch` structure ensures errors from asynchronous operations are handled gracefully and messages are logged accordingly.

// This setup demonstrates a clean and effective way to handle asynchronous operations and errors in JavaScript using `async`/`await` and `try-catch` blocks.