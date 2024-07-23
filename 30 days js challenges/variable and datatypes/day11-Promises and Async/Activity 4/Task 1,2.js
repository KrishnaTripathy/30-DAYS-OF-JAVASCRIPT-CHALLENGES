// Activity 4 : Fetching Data from an API 

// 1. Use the fetch API to get data from a public API and log the response data to the console using promises.

// fetch data from a public API 

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json()) // Convert response to JSON
.then(data => console.log(data)) // Log the JSON data
.catch(error => console.error('Error:', error)); // Handle any errors


// 2. Use the fetch API to get data from a public API and log the response data to the console using async/await.


async function fetchData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json(); // Convert response to JSON
        console.log(data); // Log the JSON data
    } catch(error){
        console.log('Error:', error); // Handle any errors
    }
}
fetchData();