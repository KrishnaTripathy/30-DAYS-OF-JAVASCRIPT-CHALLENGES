// Activity 4 : Getters and Setters

// 1. Add a getter method to the Person class to return the full name(assume a firstNmae and lastname property). create an instance and log the full name using the getter.


class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  
    static getGenericGreeting() {
      return "Hello! This is a generic greeting message.";
    }
  }
  
  // Create an instance of the Person class
  const person = new Person('John', 'Doe', 30);
  
  // Log the full name using the getter
  console.log(person.fullName);
  


  
// ### Explanation

// 1. **Constructor**

//     ```javascript
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }
//     ```
//     - Initializes a new instance with `firstName`, `lastName`, and `age` properties.

// 2. **Getter Method**

//     ```javascript
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//     ```
//     - Defines a getter method `fullName` that returns the full name by combining `firstName` and `lastName`.

// 3. **Creating an Instance**

//     ```javascript
//     const person = new Person('John', 'Doe', 30);
//     ```
//     - Creates a new `Person` instance with the specified `firstName`, `lastName`, and `age`.

// 4. **Logging the Full Name**

//     ```javascript
//     console.log(person.fullName);
//     ```
//     - Logs the full name using the `fullName` getter.