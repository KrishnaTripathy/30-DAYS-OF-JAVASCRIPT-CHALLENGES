// 2. Add a setter method to the Person class to update the name properties(firstName and lastName) . Update the name using the setter and log the updated full name.


class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName || ''; // Default to empty string if no value
      this.lastName = lastName || '';   // Default to empty string if no value
    }
  
    getGreeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  
    getAgeInMonths() {
      return this.age * 12;
    }
  
    static getGenericGreeting() {
      return "Hello! This is a generic greeting message.";
    }
  }
  
  // Create an instance of the Person class
  const person = new Person('John', 'Doe', 30);
  
  // Log the initial full name
  console.log(person.fullName);
  
  // Update the name using the setter
  person.fullName = 'Jane Smith';
  
  // Log the updated full name
  console.log(person.fullName);
  








  
// ```

// ### Explanation

// 1. **Setter Method Definition**

//     ```javascript
//     set fullName(name) {
//       const [firstName, lastName] = name.split(' ');
//       this.firstName = firstName || ''; // Default to empty string if no value
//       this.lastName = lastName || '';   // Default to empty string if no value
//     }
//     ```
//     - `set fullName(name) { ... }`: Defines a setter method `fullName` that updates both `firstName` and `lastName` based on the provided `name`.
//     - `const [firstName, lastName] = name.split(' ');`: Splits the input `name` string into `firstName` and `lastName` using space as a delimiter.
//     - `this.firstName = firstName || '';`: Sets `firstName` to the provided value or an empty string if no value is provided.
//     - `this.lastName = lastName || '';`: Sets `lastName` to the provided value or an empty string if no value is provided.

// 2. **Updating and Logging**

//     ```javascript
//     console.log(person.fullName);
//     person.fullName = 'Jane Smith';
//     console.log(person.fullName);
//     ```
//     - `console.log(person.fullName);`: Logs the initial full name.
//     - `person.fullName = 'Jane Smith';`: Uses the setter to update the name to `Jane Smith`.
//     - `console.log(person.fullName);`: Logs the updated full name.