// Activity 1 : Arithmetic Operations
// 1.Write a program to add two numbers and log the result to the console.
function add(a,b){
   return a+b;
}
console.log(add(2,3));

// or
let add = (a,b) => a+b;
console.log(add(2,3));

// 2.wap to substract two nos. and log the result to the console.
function sub(a,b){
    return a-b;
}
console.log(sub(3,2));

// or
let sub = (a,b) => a-b;
console.log(sub(3,2));

// 3.wap to multiply two nos. and log the result to the console.

function mul(a,b){
    return a*b;
}
console.log(mul(3,4));

// or
let mul = (a,b) => a*b;
console.log(mul(3,4));

//4.wap to divide two nos. and log the result to the console.

function div(a,b){
    return a/b;
}
console.log(div(4,2));

// or
let div = (a,b) => a/b;
console.log(div(4,2));

//5.wap to find the remainder when one no is divided by another and log the result to the console.
function mod(a,b){
    return a%b;
}
console.log(mod(4,2));

// or
let mod = (a,b) => a%b;
console.log(mod(4,2));






// Activity 2: Assignment Operators

// 1.Use the += operator to add a no to a variable and log the result to the console.
let a=6;
a+=6;
console.log(a);


// 2.Use the -= operator to sub a no to a variable and log the result to the console.

let b=2;
b-=1;
console.log(b);






// Activity 3: comparison Operators
// 1. wap to compare two nos. using > and < and log the result to the console.


let c, d;
function com(c,d){
if(c<d)
{
    return d;
}else{
    return c;
}
}
console.log(com(3,4));


function com(c,d){
if(c>d)
{
    return c;
}else{
    return d;
}
}
console.log(com(3,4));


// 2.wap to compare two nos. using >= and <= and log the result to the console.
 let m,n;
 function comp(m,n){
    if(m>=n){
        return m;
    }else{
        return n;
    }
 }
 console.log(comp(2,2));


 function comp(m,n){
    if(m<=n){
        return n;
    }else{
        return m;
    }
 }
 console.log(comp(2,2));


 const comp = (m,n) => {
    if(m<=n){
        return n;

    }
    else{
        return m;
    }
 }
 console.log(comp(3,4));

 // 3.wap to compare two nos. using == and === and log the result to the console.

let p,q;
function co(p,q){
    if(p==q){
        return true;
    }
    else{
        return false;
    }
}
console.log(co('2',2)); //op: true

function strict(p,q)
{
    if(p===q){
        return true;
    }
    else{
        return false;
    }
}
console.log(strict('2',2)); //op: false






// Activity 4 : Logical Operators

// 1.wap that uses the && operator to combine two conditions and log the result to the console.

let u,v, w,x;

function operator(u,v,w,x){
    if(u<=v && w>=x){
        return true;
    }else{
        return false;
    }
}
console.log(operator(2,3,7,4));


const operator = (u,v,w,x) => {
    if(u<=v && w>=x){
        return true;
    }else{
        return false;
    } 
}
console.log(operator(2,3,7,4));


//2.wap that uses the || operator to combine two conditions and log the result to the console.

let l,t,y,o;
function opr(l,t,y,o){
if(l>t || y<o){
    return true;
}
else{
    return false;
}
}
console.log(opr(3,4,5,6));


const opr = (l,t,y,o) => {
    if(l>t || y<o){
        return true;
    }
    else{
        return false;
    } 
}
console.log(opr(3,4,5,6));



//3.wap that uses the ! operator to negate a condition and log the result to the console.

let isSunny = true;
let isNotSunny = !isSunny;

console.log(isSunny);
console.log(isNotSunny);





// Activity 5: Ternary Operator

// 1. wap that uses the ternary operator to check if a number is +ve or -ve and log the result to the console.
let k=9;
console.log(k>0 ? true : false);




// Feature Request 

//Arithmetic Operations Script
// 1.write a script that performs basic arithmetic operations (addition, sub, mul,div, remainder) on two numbers and logs the results.

let num1=10;
let num2=5;

console.log(`Add: ${num1} + ${num2} = ${add}`);
console.log(`sub: ${num1} - ${num2} = ${sub}`);
console.log(`Mul: ${num1} * ${num2} = ${mul}`);
console.log(`div: ${num1} / ${num2} = ${div}`);
console.log(`mod: ${num1} % ${num2} = ${mod}`);



// Comparison and Logical Operators Script 
// 2.Create a script that compares two nos. using different comparison operators and combines conditions using logical operator, logging the results.
let z,e;
const cond = (z,e)=>{
    if(z>e && e>=5){
        return true;
    }
    else{
        return false;
    }
}
console.log(cond(8,5));


let num3 = 8;
let num4 = 12;

console.log(num3 == num4);          // false
console.log(num3 != num4);          // true
console.log(num3 > num4);           // false
console.log(num3 < num4);           // true
console.log(num3 >= num4);          // false
console.log(num3 <= num4);          // true

console.log((num3 > num4) && (num3 != num4)); // false
console.log((num3 < num4) || (num3 == num4)); // true
console.log(!(num3 == num4));                 // true


// Ternary operator script
// 3.write a script that uses the ternary operator to determine if a number is +ve or -ve and log the result.


let num5= -9;
let result = (num5 >=0) ? 'positive' : 'negative';
console.log(`the result is ${result}`);
