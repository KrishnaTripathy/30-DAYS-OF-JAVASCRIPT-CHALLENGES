// Activity 2 : Class Inheritance

// 1. Define a class Student that extends the Person class.Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge){
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age , StudentId){
        super(name,age);
        this.StudentId = StudentId;
    }
    getStudentId() {
        return `Student ID: ${this.StudentId}`;
    }
}

const student = new Student('kt',20,'s1234');

console.log(student.getStudentId());













// ### Person Class Definition

// 1. **Class Definition and Constructor**

//     ```javascript
//     class Person {
//       constructor(name, age) {
//         this.name = name;
//         this.age = age;
//       }
//     ```
//     - `class Person { ... }`: This defines a new class named `Person`.
//     - `constructor(name, age) { ... }`: The constructor method is a special method for creating and initializing an object created with a class. When a new `Person` instance is created, the `constructor` is called with `name` and `age` as arguments.
//     - `this.name = name; this.age = age;`: Inside the constructor, the `this` keyword refers to the new instance being created. These lines assign the provided `name` and `age` values to the instance properties `name` and `age`.

// 2. **getGreeting Method**

//     ```javascript
//       getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//       }
//     ```
//     - `getGreeting() { ... }`: This is a method of the `Person` class that returns a greeting message.
//     - `return ...;`: This line returns a string template that includes the `name` and `age` properties of the instance.

// 3. **updateAge Method**

//     ```javascript
//       updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//       }
//     }
//     ```
//     - `updateAge(newAge) { ... }`: This method updates the `age` property of the instance to a new value.
//     - `this.age = newAge;`: This line sets the `age` property to the new value provided.
//     - `console.log(...);`: This line logs the updated age to the console.

// ### Student Class Definition

// 4. **Class Definition and Constructor**

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

// 5. **getStudentId Method**

//     ```javascript
//       getStudentId() {
//         return `Student ID: ${this.studentId}`;
//       }
//     }
//     ```
//     - `getStudentId() { ... }`: This is a method of the `Student` class that returns the student's ID.
//     - `return ...;`: This line returns a string that includes the `studentId` property of the instance.

// ### Creating and Using Instances

// 6. **Creating an Instance and Logging the Student ID**

//     ```javascript
//     const student = new Student('Bob', 20, 'S12345');
//     ```
//     - `const student = new Student('Bob', 20, 'S12345');`: This line creates a new instance of the `Student` class, passing `'Bob'` as the name, `20` as the age, and `'S12345'` as the student ID. The resulting instance is stored in the `student` constant.

// 7. **Logging the Student ID**

//     ```javascript
//     console.log(student.getStudentId());
//     ```
//     - `console.log(student.getStudentId());`: This line calls the `getStudentId` method on the `student` instance and logs the returned value to the console, which is `Student ID: S12345`.

// This step-by-step explanation should help clarify how each part of the code works and how they interact to create and use instances of the `Person` and `Student` classes.