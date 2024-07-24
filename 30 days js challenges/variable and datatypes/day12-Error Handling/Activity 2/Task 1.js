// Activity 2: Finall Block

// 1. Write a script that includes a try-catch block and a finally block.log messages in the try, catch , and finally blocks to observe the execution flow.

function demonstrateTryCatchFinally() {
    try{
        console.log("In try block");
        // simulate an error
        throw new Error("something went wrong");
    } catch(error){
        console.log("In catch block:",error.message);
    } finally {
        console.log("In finally block");
    }
}

demonstrateTryCatchFinally();