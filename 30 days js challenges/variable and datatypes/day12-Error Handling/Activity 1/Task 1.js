// Activity 1 : Basic Error Handling with Try-Catch

// 1. Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
    throw new Error("This is an intentional error");
}
try{
    throwError();
} catch(error){
    console.log("An error occurred:", error.message);
}



