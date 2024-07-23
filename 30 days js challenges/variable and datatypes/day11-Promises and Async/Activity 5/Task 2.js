// 1. Use Promise.race to log the value of the first promise that rsolves amoung multiple promises.

// Function that returns a promise resolving with a value after a delay

function fetchData(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), delay);
    });
  }
  
  // Array of promises
  const promises = [
    fetchData('First data', 3000),
    fetchData('Second data', 1000),
    fetchData('Third data', 2000)
  ];
  
  // Use Promise.race to get the result of the first resolved promise
  Promise.race(promises)
    .then(result => {
      console.log(result); // Log the value of the first resolved promise
    })
    .catch(error => {
      console.error('Error:', error); // Handle any errors
    });
  