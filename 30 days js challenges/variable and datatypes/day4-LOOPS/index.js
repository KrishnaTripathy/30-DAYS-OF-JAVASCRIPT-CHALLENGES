// ACTIVITY 1 : For Loop

// 1.wap to print numbers from 1 to 10 using a for loop.

for(let i=1; i<=10 ; i++ ){
    console.log(`${i}`);
}

// 2.wap to print the multiplication table of 5 using a for loop.
 for(let i=1; i<=10 ; i++){
   
    console.log(`5 * ${i} = ${5 * i}`);
 }



//  Activity 2: While Loop
// 1. wap to calculate the sum of numbers from 1 to 10 using a while loop.
 let sum=0, num=1 ;

 while(num<=10){
    sum +=  num;
    num++;
    console.log(`sum is : ${sum}`);
 }

//  2.wap to print numbers from 10 to 1 using a while loop.
let i=10 ; 

while(i>=1){
console.log(`number is :${i}`);
   i--;
}

// 3.wap to print numbers from 1 to 10 using a while loop.
let l = 1;

while (l <= 10) {
  console.log(l);
  l++;
}




// Activity 3 : Do...While Loop

// 1.wap to print numbers from 1 to 5 using a do...while loop.
let j=1;
do{
   console.log(`${j}`);
   j++;
}while(j<=5);

// 2.wap to calculate the factorial of a number using a do...while loop.
let k=5;
let f=1;

do{
   f*=k;
   k--;

}while(k>0);
console.log(`The factorial of ${k} is ${f}`);



function factorial(n){
   let result = 1;
   let i=n;

   do{
      result *=i;
      i--;
   }while(i>0);

   return result;
}
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`);



// Activity 4: Nested Loops

// 1. wap to print a pattern using nested for loops.

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *


for(let i=0; i<=4 ;i++){
   let row = '';
   for(let j=0;j<=i;j++){
     row += '* ';
   }
   console.log(row);
}



// Activity 5: Loop Control Statements
// 1. wap to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i=1; i<=10; i++){
   if(i===5){
      continue; // Skip number 5
   }
   console.log(`${i}`);
}

// 2. wap to print numbers from 1 to 10 , but stop the loop when the number is 7 using the break statement.

for(let i=1 ; i<=10 ; i++){
   if(i===7){
      break; // Stop the loop when i equals 7
   }
   console.log(i);
}