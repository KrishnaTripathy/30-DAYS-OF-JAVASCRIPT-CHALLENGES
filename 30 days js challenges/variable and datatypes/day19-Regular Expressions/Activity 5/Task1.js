// Activity 5 : Practical Applications

// 1. write a regular expression to validate a simple password(must include at least one uppercase letter, one lowercase letter, one digit , and one special char). log whether the password is valid.

const password = "Password1@";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!$%^&*])[A-Za-z\d@$!$%^&*]{8,}$/;

const isValid = regex.test(password);
console.log(isValid ? "Password is valid" : "Password is invalid");




// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!$%^&*])[A-Za-z\d@$!$%^&*]{8,}$/;: Defines a regular expression to ensure:
// (?=.*[a-z]) requires at least one lowercase letter.
// (?=.*[A-Z]) requires at least one uppercase letter.
// (?=.*\d) requires at least one digit.
// (?=.*[@!$%^&*]) requires at least one special character from the set [@!$%^&*].
// [A-Za-z\d@$!$%^&*]{8,} ensures the password is at least 8 characters long, but you can adjust the length requirement as needed.
// regex.test(password);: Tests if the password matches the regular expression.
// console.log(...): Logs whether the password is valid or invalid.





