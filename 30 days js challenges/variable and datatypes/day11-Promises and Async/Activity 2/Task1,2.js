//Activity 2 : Chaining Promises

// 1. Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData(step){
    return new Promise((resolve)=>{
        setTimeout(() => resolve(`Data from step ${step}`), 1000);
    });
}

fetchData(1)
.then(result => {
    console.log(result);
    return fetchData(2);
})
.then(result => {
    console.log(result);
    return fetchData(3);
})
.then(result => {
    console.log(result);
})