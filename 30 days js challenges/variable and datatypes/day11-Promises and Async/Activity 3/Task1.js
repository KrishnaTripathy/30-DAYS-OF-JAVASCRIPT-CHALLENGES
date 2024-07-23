// Activity 3 : Using Async/Await 

// 1. Write an async function that waits for a promise to resolve and then logs the resolved value.


function fetchData() {
    return new Promise((resolve)=>{
        setTimeout(()=> resolve('Resolved data'), 2000);
    });
}
// Async function to wait for the promise and log the result
async function logData() {
    const data = await fetchData();
    console.log(data); // Log the resolved value
}
logData(); // Call the async function