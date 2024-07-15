// Activity 1 : If-Else Statements

// 1. wap to check if a number is +ve, -ve ,zero and log the result to the console.

const number = (a) => {
    if (a === 0) {
        console.log("no is zero");
    } else if (a > 0) {
        console.log("no is positive");
    }
    else if (a < 0) {
        console.log("no is negative");
    }

}
console.log(number(4));

//2. wap to check if a person is eligible to vote (age>=18) and log the result to the console.
const person = (age) => {
    if (age >= 18) {
        console.log("eligible for vote");
    } else {
        console.log("not eligible for vote");
    }
}
console.log(person(24));



// Activity 2 : Nested If-Else Statements

// 1.wap to find the largest of three numbers using nested if-else statements.

const largest = (a, b, c) => {
    if (a >= b) {
        if (a >= c) {
            console.log("a is greater");
        } else {
            console.log("c is greater");
        }
     } else {
        if (b >= c) {
            console.log("b is greater");
        }
        else {
            console.log("c is greater");
        }

    }

}
console.log(largest(3, 4, 6));


// Activity 3 : Switch Case
// 1.wap that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const day = (days) => {
    switch(days){
        case 1 : console.log("Sunday");
                 break;
        case 2: console.log("Monday");
                break;
        case 3: console.log("Tusday");
                break;
        case 4: console.log("wednesday");
                break;
        case 5: console.log("Thursday");
                break;
        case 6: console.log("Friday");
                break;
        case 7: console.log("Saturday");
                break;
        default : console.log('Invalid day number. Please enter a number between 1 and 7.');
        
    }
}
console.log(day(4));


// 2.wap that uses a switch case to assign a grade('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
// Using true: By using switch(true), we make the switch statement evaluate each case label as a boolean expression. If the expression is true, the corresponding block of code executes.

const getGrade = (score) => {
    let grade;
    switch(true){
        case (score >=90 && score <=100) : grade = 'A';
                                         break;
        case (score >=80 && score <=90) : grade = 'B';
                                         break;
        case (score >=70 && score <=80) : grade = 'C';
                                         break;
        case (score >=60 && score <=70) : grade = 'D';
                                         break;
        case (score >=0 && score <=30) : grade = 'F';
                                         break;
        default :                       grade = "invalid score";
                                                   
    }
    console.log(`grade is: ${grade}`);
}
console.log(getGrade(40));



// Activity 4 : Conditional (Ternary) Operator
// 1. wap that uses the ternary operator to check if a number is even or odd and log the result to the console.

const checkEvenOdd = (number) => {
    const result = number % 2 === 0 ? 'even' : 'odd';
    console.log(`${number} is ${result}`);
}
checkEvenOdd(3);



// Activity 5 : Combining Conditions

// 1.wap to check if a year is a leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.


const leapYear = (year) => {
    if((year%4===0 && year%100!==0) || (year %400 === 0)){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }
    
}
leapYear(2024);



// Feature Request
// 1.Number  Check Script:
// write a script that checks if a number is positive , negative , or zero using if-else statement and log the result.

const checkNumber = (number) => {
    if (number > 0) {
        console.log(`${number} is positive`);
    } else if (number < 0) {
        console.log(`${number} is negative`);
    } else {
        console.log(`${number} is zero`);
    }
}

checkNumber(10);
//2.voting eligibility script
// 3.Day of the week script
// 4.grade assignment script
// 5.leap year check script