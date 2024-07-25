// Activity 3 : Importing Entire Modules

// 1. Create a module that exports multiple constants and functions.
// Import the entire module as an object in another script and use its properties.

const PI = 3.14;
const E = 2.71;

function add(a,b){
  return a + b;
}

function subtract(a,b){
    return a - b;
}
module.exports = { PI, E, add, subtract};