// Activity 4 : Error handling in promises

// 1.create a promise that randomly resolves or rejects. Use .catch()to handle the rejection and log an appropriate message to the console.


// Function that returns a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
      // Randomly decide to resolve or reject
      const succeed = Math.random() > 0.5;
      
      setTimeout(() => {
        if (succeed) {
          resolve("Success!");
        } else {
          reject("Failed!");
        }
      }, 1000); // Delay to simulate async operation
    });
  }
  
  // Using the promise and handling rejection
  randomPromise()
    .then(result => {
      console.log(result); // Logs "Success!" if resolved
    })
    .catch(error => {
      console.log("Caught an error:", error); // Logs "Failed!" if rejected
    });

    











//     Certainly! Let’s dive deeper into each part of the code:

// ### Promise Creation and Random Resolution

// ```javascript
// function randomPromise() {
//   return new Promise((resolve, reject) => {
//     // Randomly decide to resolve or reject
//     const succeed = Math.random() > 0.5;
    
//     setTimeout(() => {
//       if (succeed) {
//         resolve("Success!");
//       } else {
//         reject("Failed!");
//       }
//     }, 1000); // Delay to simulate async operation
//   });
// }
// ```

// 1. **Function Definition (`function randomPromise()`)**:
//    - Defines a function that creates and returns a new `Promise`.

// 2. **Creating the Promise (`new Promise((resolve, reject) => { ... })`)**:
//    - The `Promise` constructor takes a function with two parameters: `resolve` and `reject`.
//    - `resolve` is a function that is called when the promise should be fulfilled.
//    - `reject` is a function that is called when the promise should be rejected.

// 3. **Random Decision (`const succeed = Math.random() > 0.5`)**:
//    - `Math.random()` generates a random number between 0 and 1.
//    - `Math.random() > 0.5` is a condition that evaluates to `true` roughly 50% of the time.
//    - If `true`, the promise will resolve. If `false`, it will reject.

// 4. **Simulating Asynchronous Operation (`setTimeout`)**:
//    - `setTimeout` is used to simulate a delay in the asynchronous operation.
//    - The function inside `setTimeout` will execute after 1000 milliseconds (1 second).

// 5. **Resolving or Rejecting**:
//    - If `succeed` is `true`, `resolve("Success!")` is called. This means the promise is successfully fulfilled with the value `"Success!"`.
//    - If `succeed` is `false`, `reject("Failed!")` is called. This means the promise is rejected with the error `"Failed!"`.

// ### Handling the Promise

// ```javascript
// randomPromise()
//   .then(result => {
//     console.log(result); // Logs "Success!" if resolved
//   })
//   .catch(error => {
//     console.log("Caught an error:", error); // Logs "Failed!" if rejected
//   });
// ```

// 1. **Calling `randomPromise()`**:
//    - Calls the `randomPromise` function, which returns a `Promise`.

// 2. **Handling Success (`.then(result => { ... })`)**:
//    - `.then()` is used to handle the successful resolution of the promise.
//    - If the promise is resolved with `"Success!"`, this value is passed to the `result` parameter in the `.then()` callback.
//    - `console.log(result)` will output `"Success!"`.

// 3. **Handling Failure (`.catch(error => { ... })**:
//    - `.catch()` is used to handle the rejection of the promise.
//    - If the promise is rejected with `"Failed!"`, this value is passed to the `error` parameter in the `.catch()` callback.
//    - `console.log("Caught an error:", error)` will output `"Caught an error: Failed!"`.

// ### Summary

// - **Promise Creation**: Defines an asynchronous operation that randomly resolves or rejects.
// - **Resolution**: Based on the random decision, the promise either resolves with `"Success!"` or rejects with `"Failed!"`.
// - **Error Handling**: Uses `.then()` to handle successful resolutions and `.catch()` to handle errors.

// This pattern is useful for managing asynchronous tasks and handling potential errors in a clear and manageable way.