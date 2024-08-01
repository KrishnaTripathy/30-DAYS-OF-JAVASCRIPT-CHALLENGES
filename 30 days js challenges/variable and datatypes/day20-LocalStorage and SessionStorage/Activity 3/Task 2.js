// 2. Write a script to save an object to sessionStorage by converting it to a JSON string. retrive and parse the object, then log it.

// Define an object
const myObject = { name: 'Alice', age: 30 };

// Save the object to sessionStorage as a JSON string
sessionStorage.setItem('myObjectKey', JSON.stringify(myObject));

// Retrieve the JSON string from sessionStorage and parse it back to an object
const retrievedObject = JSON.parse(sessionStorage.getItem('myObjectKey'));

// Log the retrieved object
console.log(retrievedObject);




// Defines an object myObject.
// Converts the object to a JSON string and saves it to sessionStorage with the key 'myObjectKey'.
// Retrieves the JSON string associated with the key 'myObjectKey' from sessionStorage and parses it back into an object.
// Logs the retrieved object to the console.