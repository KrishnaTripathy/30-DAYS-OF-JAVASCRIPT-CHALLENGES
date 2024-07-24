// ACTIVITY 5 : Graceful Error handling in fetch

// 1. Use the fetch API to request data from an invalid URL AND HANDLE THE ERROR using .catch().log an appropriate error message to the console.

fetch('https://invalid-url.example.com')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data if response is okay
  })
  .then(data => {
    console.log(data); // Log data if successful
  })
  .catch(error => {
    console.log('Error occurred:', error.message); // Log error message if there's an error
  });



//   Explanation
// fetch('https://invalid-url.example.com'):

// Sends a request to the specified URL. Since it's invalid, it will fail.
// .then(response => { ... }):

// Handles the response. Checks if the response is okay (status in the range 200–299).
// If not, it throws an error.
// .then(data => { ... }):

// Handles the JSON data if the request is successful.
// .catch(error => { ... }):

// Catches and handles any errors from the fetch request or response handling.
// Logs an appropriate error message to the console.