// Activity 1 : variable declaration
var a =7; //number
console.log(a);

let b= "krishna"; //string
console.log(b);


//Activity 2 : constant declaration 

const c = true; 
console.log(c);


//Activity 3 : Data Types


let number = 42;
console.log(typeof number);

let string = 'krishna';
console.log(typeof string);

let boolean = true;
console.log(typeof boolean);

const object = {
    name: 'krishna'
}
console.log(typeof object)


const array = [1,2,3,4];
console.log(typeof array);
console.log(Array.isArray(array));
console.log("myArray:", array, "typeof:", Array.isArray(array) ? 'array' : typeof array);



//Activity 4 : Reassigning Variables

let d =9;
 d=10;
console.log(d); //10
console.log(d);  //10

let e =9;
console.log(e); //9
 e=10;
console.log(e);  //10



//Activity 5 : Understanding const

const f = 10;
f=30;
console.log(f);  //TypeError: Assignment to constant variable.


// Feature Request


// 1. write a script that declares variables of different types and logs both the value and typeof each variable to the console.

let num =5;
console.log(num, typeof(num));

let str = 'krishna';
console.log(str,typeof(str));

let bool = true;
console.log(bool,typeof(bool));

const obj = {
    data: "good"
}
console.log(obj,typeof(obj));


// const arr = [1,2,3,4];
// console.log(arr,typeof(Array.isArray(arr)));  //) [1, 2, 3, 4], 'boolean'

const arr = [1,2,3,4];
console.log("myArray:", arr, "typeof:", Array.isArray(arr) ? 'array' : typeof arr);


// 2. Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
 let a=3;
 a=5;
 console.log(a); //5

 const a=7;
 a=9;
 console.log(a); // Assignment to constant variable.