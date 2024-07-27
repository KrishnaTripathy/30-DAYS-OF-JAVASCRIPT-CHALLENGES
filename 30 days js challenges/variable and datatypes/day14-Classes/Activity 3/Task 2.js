// 2. Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total no of students.

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
    static studentCount = 0; // Static property to keep track of the number of students
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.studentCount++; // Increment the static property
      console.log(`Total number of students: ${Student.studentCount}`);
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  }
  
  // Create instances of the Student class
  const student1 = new Student('Bob', 20, 'S12345');
  const student2 = new Student('Alice', 22, 'S67890');
  
  // Log the student IDs
  console.log(student1.getStudentId());
  console.log(student2.getStudentId());

  













  

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

// 6. **Class Definition and Static Property**

//     ```javascript
//     class Student extends Person {
//       static studentCount = 0; // Static property to keep track of the number of students
//     ```
//     - `class Student extends Person { ... }`: This defines a new class named `Student` that extends the `Person` class, meaning `Student` inherits all properties and methods from `Person`.
//     - `static studentCount = 0;`: This defines a static property `studentCount` on the `Student` class and initializes it to 0. This property keeps track of the number of `Student` instances created.

// 7. **Constructor**

//     ```javascript
//       constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//         Student.studentCount++; // Increment the static property
//         console.log(`Total number of students: ${Student.studentCount}`);
//       }
//     ```
//     - `constructor(name, age, studentId) { ... }`: The constructor method for the `Student` class takes three parameters: `name`, `age`, and `studentId`.
//     - `super(name, age);`: The `super` keyword calls the constructor of the parent class (`Person`) with the `name` and `age` parameters, initializing these properties in the `Person` part of the `Student` instance.
//     - `this.studentId = studentId;`: This line assigns the provided `studentId` to the `studentId` property of the `Student` instance.
//     - `Student.studentCount++;`: This line increments the `studentCount` static property each time a new `Student` instance is created.
//     - `console.log(...);`: This line logs the updated total number of students to the console.

// 8. **Overridden getGreeting Method**

//     ```javascript
//       getGreeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//       }
//     ```
//     - `getGreeting() { ... }`: This method overrides the `getGreeting` method from the `Person` class.
//     - `return ...;`: This line returns a template string that includes the `name`, `age`, and `studentId` properties of the instance.

// 9. **getStudentId Method**

//     ```javascript
//       getStudentId() {
//         return `Student ID: ${this.studentId}`;
//       }
//     }
//     ```
//     - `getStudentId() { ... }`: This is a method of the `Student` class that returns the student ID.
//     - `return ...;`: This line returns a string that includes the `studentId` property of the instance.

// ### Using the Classes

// 10. **Creating Instances**

//     ```javascript
//     const student1 = new Student('Bob', 20, 'S12345');
//     const student2 = new Student('Alice', 22, 'S67890');
//     ```
//     - `const student1 = new Student('Bob', 20, 'S12345');`: This line creates a new instance of the `Student` class, passing `'Bob'` as the name, `20` as the age, and `'S12345'` as the student ID. The resulting instance is stored in the `student1` constant.
//     - `const student2 = new Student('Alice', 22, 'S67890');`: This line creates another instance of the `Student` class, passing `'Alice'` as the name, `22` as the age, and `'S67890'` as the student ID. The resulting instance is stored in the `student2` constant.

// 11. **Logging the Student IDs**

//     ```javascript
//     console.log(student1.getStudentId());
//     console.log(student2.getStudentId());
//     ```
//     - `console.log(student1.getStudentId());`: This line calls the `getStudentId` method on the `student1` instance and logs the returned value to the console.
//     - `console.log(student2.getStudentId());`: This line calls the `getStudentId` method on the `student2` instance and logs the returned value to the console.

// 12. **Calling the Static Method**

//     ```javascript
//     console.log(Person.getGenericGreeting());
//     ```
//     - `console.log(Person.getGenericGreeting());`: This line calls the `getGenericGreeting` static method on the `Person` class directly (without creating an instance) and logs the returned message to the console.

// This detailed explanation should help clarify how each part of the code works and how they interact to create and use instances of the `Person` and `Student` classes, including the use of static properties and methods.