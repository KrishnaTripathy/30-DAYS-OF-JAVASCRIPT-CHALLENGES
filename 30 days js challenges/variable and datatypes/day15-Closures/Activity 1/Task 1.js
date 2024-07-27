// Activity 1 : Understanding Closures

// 1. Write a function that returns another function , where the inner function access a variabale from the outer function's scope.call the inner function and log the result.

function createGreeter(greeting) {
    return function() {
      return greeting;
    };
  }
  
  // Create a greeter function
  const greet = createGreeter('Hi there!');
  
  // Call the greeter function and log the result
  console.log(greet()); // Hi there!
  