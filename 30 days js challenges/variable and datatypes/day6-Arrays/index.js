// Activity 1 : Array Creation and Access

// 1. Create an array of numbers from 1 to 5 and log the array to the console.

// const array = [1,2,3,4,5];
console.log(array);

// 2. Access the first and last elements of the array and log them to the console.

// const array = [1,2,3,4,5];

const firstElement = array[0];
const lastElement = array[array.length-1];

console.log("first element is:", firstElement);
console.log("last element is:", lastElement);


// Activity 2: Array Methods (Basic)

// 1.Use the push method to add a new number to the end of the array and log the updated array.

// const array = [1,2,3,4,5];
array.push(6);
console.log(array);

// 2. Use the pop method to remove the last element from the array and log the updated array.
 
// const array = [1,2,3,4,5];
array.pop(4);
console.log(array);

// 3. Use the shift method to remove the first element from the array and log the updated array.

// const array = [1,2,3,4,5];
array.shift(0);
console.log(array);

// 4. Use the unshift method to add anew number to the beginning of the array and log the updated array.

// const array = [1,2,3,4,5];
array.unshift(0);
console.log(array);



// Activity 3 : Array Methods (Intermediate)

// 1. Use the map method to create a new array where each number is doubled and log the new array.

// const array = [1,2,3,4,5];
const doubleArray = array.map(num => num *2);
console.log(doubleArray);

// 2. Use the filter method to create a new array with only even numbers and log the new array.

// const array = [1,2,3,4,5];
const evenArray = array.filter(num => num % 2 === 0);
console.log(evenArray);


// 3. Use the reduce method to calculate the sum of all numbers in the array and log the result.

// const array = [1,2,3,4,5];
const sum = array.reduce((total,num)=>total + num , 0);
console.log(sum);



// Activity 4 : Array Iteration

// 1. Use a for loop to iterate over the array and log each element to the console.

// const array = [1,2,3,4,5];

for(i=0; i< array.length; i++) {
    console.log(array[i]);
}

// 2.Use the forEach method to iterate over the array and log each element to the console.

const array = [1,2,3,4,5];
 array.forEach(num => console.log(num));



//  Activity 5 : Multi-dimensional Arrays

// 1.create a two dimensional array (matrix) and log the entire array to the console.

const matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix1);

// 2.Access and log a specific element from the two-dimensional array.

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const element = matrix[1][2];
console.log(element); // op: 6
