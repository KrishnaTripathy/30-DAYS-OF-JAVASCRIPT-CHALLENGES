// Activity 3 : Static Methods and Properties

// 1. Add a static method to the Person class that returns a generic gretting message.
// call this static method without creating an instance of the class and log the Message .

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  
    static getGenericGreeting() {
      return "Hello! This is a generic greeting message.";
    }
  }
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  }
  
  // Call the static method without creating an instance of the class
  console.log(Person.getGenericGreeting());

  














//   Certainly! Here’s a detailed line-by-line explanation of the code:

// ### Person Class Definition

// 1. **Class Definition**

//     ```javascript
//     class Person {
//     ```
//     - `class Person { ... }`: This defines a new class named `Person`.

// 2. **Constructor**

//     ```javascript
//       constructor(name, age) {
//         this.name = name;
//         this.age = age;
//       }
//     ```
//     - `constructor(name, age) { ... }`: The constructor method initializes a new instance of the `Person` class with the provided `name` and `age` parameters.
//     - `this.name = name; this.age = age;`: These lines assign the provided `name` and `age` values to the instance properties `name` and `age`.

// 3. **getGreeting Method**

//     ```javascript
//       getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//       }
//     ```
//     - `getGreeting() { ... }`: This is a method of the `Person` class that returns a greeting message.
//     - `return ...;`: This line returns a template string that includes the `name` and `age` properties of the instance.

// 4. **updateAge Method**

//     ```javascript
//       updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//       }
//     ```
//     - `updateAge(newAge) { ... }`: This method updates the `age` property of the instance to a new value.
//     - `this.age = newAge;`: This line sets the `age` property to the new value provided.
//     - `console.log(...);`: This line logs the updated age to the console.

// 5. **Static getGenericGreeting Method**

//     ```javascript
//       static getGenericGreeting() {
//         return "Hello! This is a generic greeting message.";
//       }
//     }
//     ```
//     - `static getGenericGreeting() { ... }`: This defines a static method named `getGenericGreeting`. Static methods are called on the class itself, not on instances of the class.
//     - `return ...;`: This line returns a generic greeting message.

// ### Student Class Definition

// 6. **Class Definition and Constructor**

//     ```javascript
//     class Student extends Person {
//       constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//       }
//     ```
//     - `class Student extends Person { ... }`: This defines a new class named `Student` that extends the `Person` class, meaning `Student` inherits all properties and methods from `Person`.
//     - `constructor(name, age, studentId) { ... }`: The constructor method for the `Student` class takes three parameters: `name`, `age`, and `studentId`.
//     - `super(name, age);`: The `super` keyword calls the constructor of the parent class (`Person`) with the `name` and `age` parameters, initializing these properties in the `Person` part of the `Student` instance.
//     - `this.studentId = studentId;`: This line assigns the provided `studentId` to the `studentId` property of the `Student` instance.

// 7. **Overridden getGreeting Method**

//     ```javascript
//       getGreeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//       }
//     ```
//     - `getGreeting() { ... }`: This method overrides the `getGreeting` method from the `Person` class.
//     - `return ...;`: This line returns a template string that includes the `name`, `age`, and `studentId` properties of the instance.

// 8. **getStudentId Method**

//     ```javascript
//       getStudentId() {
//         return `Student ID: ${this.studentId}`;
//       }
//     }
//     ```
//     - `getStudentId() { ... }`: This is a method of the `Student` class that returns the student ID.
//     - `return ...;`: This line returns a string that includes the `studentId` property of the instance.

// ### Using the Classes

// 9. **Calling the Static Method**

//     ```javascript
//     console.log(Person.getGenericGreeting());
//     ```
//     - `console.log(Person.getGenericGreeting());`: This line calls the `getGenericGreeting` static method on the `Person` class directly (without creating an instance) and logs the returned message to the console.

// This detailed explanation should help clarify how each part of the code works and how they interact to create and use instances of the `Person` and `Student` classes, including the use of static methods.