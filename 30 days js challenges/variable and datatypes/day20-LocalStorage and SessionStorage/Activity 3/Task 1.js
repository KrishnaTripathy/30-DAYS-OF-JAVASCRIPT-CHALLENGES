// activity 3 : understanding sessionStorage

// 1. write a script to save a string value to sessionStorage and retrive it. Log the retrived value.

// Save a string value to sessionStorage
sessionStorage.setItem('myKey', 'Hello, SessionStorage!');

// Retrieve the string value from sessionStorage
const retrievedValue = sessionStorage.getItem('myKey');

// Log the retrieved value
console.log(retrievedValue);
