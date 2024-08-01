//  2. write a script to save an object to localStorage by converting it to a JSON string. Retrive and parse the object, then log it.

// Define an object
const myObject = { name: 'Alice', age: 30 };

// Save the object to localStorage as a JSON string
localStorage.setItem('myObjectKey', JSON.stringify(myObject));

// Retrieve the JSON string from localStorage and parse it back to an object
const retrievedObject = JSON.parse(localStorage.getItem('myObjectKey'));

// Log the retrieved object
console.log(retrievedObject);






// this script performs the following steps:

// Defines an object myObject.
// Converts the object to a JSON string and saves it to localStorage with the key 'myObjectKey'.
// Retrieves the JSON string associated with the key 'myObjectKey' from localStorage and parses it back into an object.
// Logs the retrieved object to the console.





