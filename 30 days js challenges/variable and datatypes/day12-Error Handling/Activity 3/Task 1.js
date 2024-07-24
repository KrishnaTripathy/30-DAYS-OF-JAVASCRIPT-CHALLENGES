// ACTIVITY 3: Custom Error Objects 

// 1. create a custom error class that extends the built in error class. throw an instance of this custom error 
// in a function and handle it using a try-catch block.


class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = "CustomError";
    }
}

// Function that throws the custom error

function throwCustomError() {
    throw new CustomError("This is a custom error");

}

// Try-catch block to handle the custom error

try{
    throwCustomError();
}catch(error){
    console.log("caught:",error.name, "-", error.message);
}




// class CustomError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "CustomError";
//     }
//   }
  



// ### Explanation

// 1. **Class Declaration (`class CustomError extends Error`)**:
//    - `class CustomError` defines a new class named `CustomError`.
//    - `extends Error` indicates that `CustomError` inherits from the built-in `Error` class. This means `CustomError` will have all the properties and methods of the `Error` class.

// 2. **Constructor Method (`constructor(message)`)**:
//    - The constructor method is a special method used for creating and initializing objects created with the class.
//    - `constructor(message)` takes a `message` parameter, which is the error message you want to associate with the custom error.

// 3. **Calling the Parent Class Constructor (`super(message)`)**:
//    - `super(message)` calls the constructor of the parent class (`Error`). This sets the `message` property of the `Error` object to the value passed in.
//    - It ensures that the custom error behaves like a standard error in terms of message handling.

// 4. **Setting the Name Property (`this.name = "CustomError"`)**:
//    - `this.name = "CustomError"` sets the `name` property of the error object to "CustomError".
//    - This helps in identifying that the error is of type `CustomError` rather than a generic `Error`.

// ### Why Use Custom Errors?

// - **Clarity**: Custom errors make it clear what kind of error occurred. For instance, `CustomError` is more specific than a generic `Error`.
// - **Handling Specific Errors**: Allows for more precise error handling. You can catch and handle specific types of errors differently based on the error type.
// - **Extensibility**: Custom errors can carry additional information relevant to your application, making debugging and error reporting more effective.

// ### Example Usage

// Here’s how you might use the `CustomError` class in practice:

// ```javascript
// // Function that throws the custom error
// function throwCustomError() {
//   throw new CustomError("This is a custom error");
// }

// // Try-catch block to handle the custom error
// try {
//   throwCustomError();
// } catch (error) {
//   console.log("Caught an error:", error.name, "-", error.message);
// }
// ```

// - **throwCustomError Function**: Throws an instance of `CustomError`.
// - **Try-Catch Block**: Catches the `CustomError` and logs the error name and message to the console.

// This approach provides a clear and manageable way to handle specific error types in your code.