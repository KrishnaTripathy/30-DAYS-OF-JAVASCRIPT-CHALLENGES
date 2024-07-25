//Activity 4 : Using Third-Party Modules

// 1. Install a 3rd-party module (eg. lodash) using npm. import and use a function from this module in a script.


// npm install lodash

const lodash = require('lodash');
console.log(lodash.shuffle([1,2,3,4,5]));

// op: [3, 1, 4, 2, 5] // The order will vary








// The line `console.log(_.shuffle([1, 2, 3, 4, 5]));` means:

// 1. **`_.shuffle([1, 2, 3, 4, 5])`**:
//    - This part of the code uses the `shuffle` function from the `lodash` library (imported as `_`).
//    - `shuffle` takes an array as an argument and returns a new array with the elements randomly shuffled.
//    - In this case, the array `[1, 2, 3, 4, 5]` is passed to `shuffle`.

// 2. **`console.log(...)`**:
//    - This function outputs the result to the console.

// Putting it all together, `console.log(_.shuffle([1, 2, 3, 4, 5]));` will print a randomly shuffled version of the array `[1, 2, 3, 4, 5]` to the console. The output will be different each time you run the script because `shuffle` randomizes the order of the elements in the array.

// For example:
// ```
// [3, 1, 4, 2, 5] // The order will vary each time you run the script
// ```