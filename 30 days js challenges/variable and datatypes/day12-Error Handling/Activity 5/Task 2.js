// 2. Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch.log an appropriate error message.

// Async function to fetch data
async function fetchData() {
    try {
      const response = await fetch('https://invalid-url.example.com');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data); // Log data if successful
      
    } catch (error) {
      console.log('Error occurred:', error.message); // Log error message
    }
  }
  
  // Call the async function
  fetchData();

  






//   Async Function (fetchData):

// Defines an async function to use await.
// await fetch('https://invalid-url.example.com'):

// Sends a request to the invalid URL and waits for the response.
// Error Handling (if (!response.ok) { throw new Error('Network response was not ok') }):

// Checks if the response status is not OK.
// Throws an error if the response is not OK.
// await response.json():

// Parses the JSON data from the response if successful.
// catch (error):

// Catches and handles any errors from the fetch operation.
// Logs an appropriate error message to the console.
// Calling fetchData():

// Invokes the async function to perform the fetch operation.