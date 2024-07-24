// 2. Create  a function that divides 2 nos and throws an error if the denominator is zero. use a try-catch block to handle this error.


function divide(a,b){

    if(b===0){
        throw new Error("Can not divide by zero");
    }
    return a / b;
}

try{
    let result = divide(5,0);
    console.log("Result:",result);
}catch(error){
    console.log("An error occurred:", error.message);
}