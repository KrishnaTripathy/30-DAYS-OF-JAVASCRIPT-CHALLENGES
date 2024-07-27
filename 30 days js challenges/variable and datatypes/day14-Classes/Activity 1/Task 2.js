//2. Add a method to the Person class that updates the age property and logs the updated age.

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
// Create an instance of the Person class
const age = new Person('kt',30);

console.log(age.getGreeting());


// Update the age and log the updated age
age.updateAge(21);