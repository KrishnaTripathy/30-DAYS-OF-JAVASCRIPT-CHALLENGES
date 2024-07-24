// 2. write a function that validates user input (e.g. checking if a string is not empty) and throws a custom error if the validations fails.handle the custom error using a try-catch block.

// Custom error class
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  // Function to validate input
  function validateInput(input) {
    if (input.trim() === "") {
      throw new ValidationError("Input cannot be empty");
    }
    console.log("Input is valid");
  }
  
  // Try-catch block to handle the custom error
  try {
    validateInput(""); // Test with an empty string
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }

  





//   Certainly! Let's delve deeper into each part of the code:

//   ### Custom Error Class
  
//   ```javascript
//   class ValidationError extends Error {
//     constructor(message) {
//       super(message);        // Calls the constructor of the parent class (Error)
//       this.name = "ValidationError"; // Sets the name property to identify the type of error
//     }
//   }
//   ```
  
//   1. **Class Declaration (`class ValidationError extends Error`)**:
//      - `class ValidationError` creates a new class named `ValidationError`.
//      - `extends Error` means this class inherits from the built-in `Error` class, so it will have all properties and methods of `Error`.
  
//   2. **Constructor Method (`constructor(message)`)**:
//      - `constructor(message)` initializes a new instance of `ValidationError`.
//      - `message` is a parameter that represents the error message you want to set.
  
//   3. **Calling `super(message)`**:
//      - `super(message)` calls the constructor of the `Error` class. This sets the `message` property of the error instance to the string passed in.
//      - It ensures the `message` is properly initialized in the base `Error` class.
  
//   4. **Setting `this.name`**:
//      - `this.name = "ValidationError"` sets the `name` property of the error object to `"ValidationError"`.
//      - This helps distinguish this error from other types of errors, making error handling more specific.
  
//   ### Validation Function
  
//   ```javascript
//   function validateInput(input) {
//     if (input.trim() === "") {
//       throw new ValidationError("Input cannot be empty");
//     }
//     console.log("Input is valid");
//   }
//   ```
  
//   1. **Function Declaration (`function validateInput(input)`)**:
//      - `validateInput` is a function that takes one parameter, `input`.
  
//   2. **Input Validation (`if (input.trim() === "")`)**:
//      - `input.trim()` removes any leading and trailing whitespace from the input string.
//      - `if (input.trim() === "")` checks if the resulting string is empty. If it is, this means the input was either empty or contained only whitespace.
  
//   3. **Throwing Custom Error (`throw new ValidationError("Input cannot be empty")`)**:
//      - If the input is empty, a new `ValidationError` is created with the message `"Input cannot be empty"`.
//      - `throw` causes the function to stop executing and sends the `ValidationError` to the nearest `catch` block.
  
//   4. **Valid Input**:
//      - If the input is not empty, `"Input is valid"` is logged to the console.
  
//   ### Try-Catch Block
  
//   ```javascript
//   try {
//     validateInput(""); // Test with an empty string
//   } catch (error) {
//     console.log(`${error.name}: ${error.message}`);
//   }
//   ```
  
//   1. **Try Block (`try { ... }`)**:
//      - The `try` block contains code that may throw an error.
//      - `validateInput("")` is called with an empty string, which triggers the custom error.
  
//   2. **Catch Block (`catch (error) { ... }`)**:
//      - The `catch` block catches any errors thrown by the `try` block.
//      - The parameter `error` is an instance of the `ValidationError` class (or another error class if different errors were thrown).
  
//   3. **Logging the Error**:
//      - `console.log(`${error.name}: ${error.message}`)` logs the error’s name and message.
//      - `error.name` will be `"ValidationError"`, and `error.message` will be `"Input cannot be empty"`.
  
//   ### Summary
  
//   - **Custom Error Class**: Allows you to create specific types of errors with custom names and messages.
//   - **Validation Function**: Checks if the input is valid and throws a custom error if it's not.
//   - **Try-Catch Block**: Handles the thrown error and allows you to respond appropriately, such as logging an error message.
  
//   This setup helps in managing and handling errors in a clear and organized manner, improving the robustness and clarity of your code.