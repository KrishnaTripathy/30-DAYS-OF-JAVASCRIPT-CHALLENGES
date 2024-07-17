// Activity 1 : Function Declaration 

// 1.write a function to check if a number is even or odd and log the result to the console.
function evenOdd(num){
    if(num%2===0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}
evenOdd(4);


// 2.write a function to calculate the square of a number and return the result.
let result;
function square(num){
    result = num * num;
    console.log(`${result}`);
}
square(2);


function calculateSquare(number){
    return number * number ;
}
let result1 = calculateSquare(7);
console.log(result1);


// Activity 2 : Function Expression 

// 1.write a function expression to find the maximum of two numbers and log the result to the console.
let max = function maximum(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
let result4 = max(2,3);
console.log(result4);



// or

const findMax = function(num1, num2) {
    let max = num1 > num2 ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is: ${max}`);
}

// Example usage:
findMax(5, 10);  // Output: The maximum of 5 and 10 is: 10
findMax(-3, 0);  // Output: The maximum of -3 and 0 is: 0
findMax(7, 7);   // Output: The maximum of 7 and 7 is: 7


// 2.write a function expression to concatenate two strings and return the result.

const concatenateString = function(str1, str2){
    return str1 + str2 ;
}
let result5 = concatenateString('krishna','tripathy');
console.log(result5);



// Activity 3 : Arrow functions 
// 1.write a arrow function to calculate the sum of two numbers and return the result.

const sum = (a, b) => a+b;
let result2 = sum(2,3);
console.log(result2);


// 2.write an arrow function to check if a string contains a specific char and return a boolean value.

const containsCharacter = (str , char) => str.includes(char);
let str = "krishna";
let char = "o";
let result3 = containsCharacter(str, char);
console.log(result3);



// Activity 4 : function Parameters and default values

// 1.write a function that takes 2 parameters and returns their product.provide a defult value for the second parameter.

const calculateProduct = (num1, num2=1) => {
    return num1 * num2;
}
let result6 = calculateProduct(3);
console.log(result6);



// 2.write a function that takes a person's name and age and returns a greeting message.provide a default value for the age?


const age = (name, age=30)=>{
    return `Hello ${name} ! you are ${age} years old.`;
}
let result7 = age("bob");
console.log(result7);



// Activity 5 : Higher-Order Functions

// 1.Write a Higher order function that takes a function and number ,and calls the function that many times.

function callNtimes(func,n){
    for(let i=0; i< n; i++){
        func(); //call the function 'n' times
    }
}
function greet() {
    console.log("Hello!");
}
callNtimes(greet, 3);

// 2.write a higher-order function that takes two functions and a value , 
// applies the first function to the value, and then applies the second function to the result.

const applyFunctions = (func1, func2, value) => func2(func1(value));

// Example usage:
const double = x => x * 2;
const addTen = x => x + 10;

const initialValue = 5;
const finalResult = applyFunctions(double, addTen, initialValue);
console.log(finalResult); // Output: 20 (double(5) -> 10, addTen(10) -> 20)


