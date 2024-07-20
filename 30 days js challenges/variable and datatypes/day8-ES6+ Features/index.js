// Activity 1 : Template Literals

// 1. Use template literals to create a string that includes variables for a person's name and age and log the string to the console.
 const name = "krishna";
 const age = 24;
 const msg = `My name is ${name} and my age is ${age}`;
 console.log(msg);

//  2. Create a multi-line string using template literals and log it to the console.
 const multiLineString = `This is a multi-line string.
 You can write text on multiple lines`;
 console.log(multiLineString);



//  Activity 2 : Destructuring

// 1.Use array destructuring to extract the first and second elements from an array  of numbers and log them to the console.

const numbers = [10,20,30,40,50];
const [first, second] = numbers;
console.log(first);
console.log(second);

// or
const {a,b} = {a:4, b:5};
console.log(a);
console.log(b);


// 2.Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title : "the world",
    author: "krishna"
}
const {title , author} = book ;
console.log(title);
console.log(author);



// Activity 3 : Spread and Rest Operators

// 1.Use the spread operator to create a new array that includes all elements of an existing array plus additional elements , and log the new array to the console.

const originalArray = [1,2,3,4,5];
const newArray = [...originalArray, 6,7,8];
console.log(newArray);


// 2.Use the rest operator in a function to accept an arbitary number of arguments , sum them and return the result.

function sum(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr, 0);
}
const result = sum(1,2,3,4,5);
console.log(result);

// or

function sum(...numbers){
    let total = 0;
    for(const num of numbers){
        total += num;
    }
    return total;
}
const result1 = sum(1,2,3,4,5);
console.log(result1);



//Activity 4 : Default Parameters

// 1.write a function that takes 2 parameters and returns their product , with the 2nd parameter having a default value of 1 .log the result of calling this function with and without the 2nd parameter.
function multiply(a,b=1){
    return a*b;
}
const result2 = multiply(3,4);
const result3 = multiply(3);

console.log(result2);
console.log(result3);



// Activity 5 : Enhanced Object Literals 

// 1.Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const person = {
    name : "krishna",
    age : 24,
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
};
console.log(person);
person.greet();


// or

const name2 = "John";
const age2 = 30;

const person2 = {
  name2,
  age2,
  greet() {
    console.log(`Hello, my name is ${this.name2} and I am ${this.age2} years old.`);
  }
};

console.log(person2); 
person.greet();      


// 2.create an object with computed property names based on variables and log the object to the console.

const key1 = "name";
const key2 = "age";

const person3 = {
    [key1] : "krishna",
    [key2] : 24
};
console.log(person3);