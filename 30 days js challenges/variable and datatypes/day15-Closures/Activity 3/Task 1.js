// Activity 3: Closures in Loops

// 1. Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const functions = [];

for (let i = 0; i < 5; i++) {
  functions.push((function(index) {
    return function() {
      console.log(index);
    };
  })(i));
}

// Call each function to log its index
functions.forEach(func => func());













// // Initialize an array to hold the functions
// const functions = [];

// // Loop to create 5 functions
// for (let i = 0; i < 5; i++) {
//   // Push a new function into the array
//   functions.push(
//     // Create an immediately-invoked function expression (IIFE)
//     (function(index) {
//       // The IIFE takes the current value of i (as index) and returns a new function
//       return function() {
//         // This inner function logs the captured index value
//         console.log(index);
//       };
//     })(i) // Immediately invoke the IIFE with the current value of i
//   );
// }

// // Iterate over the functions array and call each function
// functions.forEach(func => func());
