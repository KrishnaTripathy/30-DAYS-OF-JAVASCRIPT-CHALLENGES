// 2. Override the greeting method in the Student class to include the student ID in the message.Log the overridden greeting message.

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
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }
    getGreeting(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
    getStudentId(){
        return `Student ID: ${this.studentId}`;
    }
}

const student = new Student('kt', 20, 'S1234');

console.log(student.getGreeting());