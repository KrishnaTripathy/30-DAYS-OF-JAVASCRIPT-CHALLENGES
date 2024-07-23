// 1. write an async function that handles a rejected promise using try-catch and logs the error message.


function fetchData() {
    return new Promise((_, reject)=>{
        setTimeout(() => reject('Error occurred'),2000);
    });
}
// Async function to handle the rejected promise
async function handleError() {
    try{
        const data = await fetchData();
        console.log(data); // This won't be reached
    }catch(error){
        console.log(error);
    }
}
handleError();