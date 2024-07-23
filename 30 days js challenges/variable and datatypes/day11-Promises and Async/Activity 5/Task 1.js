// Activity 5 : Concurrent Promises 

// 1. Use Promise.all to wait for multiple promises to resolve and then log all their values.

// Function that returns a promise resolving with a value after a delay
function fetchData(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), delay);
    });
  }
  
  // Array of promises
  const promises = [
    fetchData('First data', 1000),
    fetchData('Second data', 2000),
    fetchData('Third data', 3000)
  ];
  
  // Use Promise.all to wait for all promises to resolve
  Promise.all(promises)
    .then(results => {
      console.log(results); // Log all resolved values as an array
    })
    .catch(error => {
      console.error('Error:', error); // Handle any errors
    });
  

