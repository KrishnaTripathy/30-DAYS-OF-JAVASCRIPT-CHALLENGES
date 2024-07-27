// 2. Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreeter(name) {
    return function() {
      return `Hello, ${name}!`;
    };
  }
  
  // Create a greeter function for a specific user
  const greetJohn = createGreeter('John');
  
  // Call the greeter function and log the result
  console.log(greetJohn()); // Hello, John!
  








  
// ### Explanation

// 1. **Closure Creation**

//     ```javascript
//     function createGreeter(name) {
//       return function() {
//         return `Hello, ${name}!`;
//       };
//     }
//     ```
//     - `createGreeter(name)`: Takes a `name` parameter and returns a function.
//     - The returned function captures the `name` and returns a greeting message.

// 2. **Create Greeter Function**

//     ```javascript
//     const greetJohn = createGreeter('John');
//     ```
//     - Calls `createGreeter` with `'John'`, creating a function that greets John.

// 3. **Call and Log Greeting**

//     ```javascript
//     console.log(greetJohn()); // Hello, John!
//     ```
//     - Calls the `greetJohn` function to get and log the greeting message.