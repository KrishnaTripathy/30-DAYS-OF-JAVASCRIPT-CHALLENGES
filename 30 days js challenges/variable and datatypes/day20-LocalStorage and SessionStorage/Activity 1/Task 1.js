// Activity 1 : Understanding LocalStorage

// 1. Write a script to save a string value to localStorage and retrieve it. Log the retrived value.

// Save a string value to localStorage
localStorage.setItem('myKey', 'Hello, World!');

// Retrieve the string value from localStorage
const retrievedValue = localStorage.getItem('myKey');

// Log the retrieved value
console.log(retrievedValue);
