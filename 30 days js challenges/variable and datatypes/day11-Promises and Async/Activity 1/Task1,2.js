// Activity 1 : Understanding Promises

// 1.Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
new Promise((resolve)=>{
    setTimeout(()=> resolve('message after 2 sec'), 2000 );
}).then(console.log);


// 2. Create a promise that rejects with an error message after a 2-sec timeout and handle the error using .catch().

new Promise((_,reject) => {
    setTimeout(()=> reject('Error after 2 sec'),2000);

}).catch(error => {
    console.log("error");
});
