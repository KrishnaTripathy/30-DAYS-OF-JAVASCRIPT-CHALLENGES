// Activity 1 : Basic  Regular Expression 

// 1. Write a regular expression to match a simple pattern(e.g. match all occurrences of the word "javascript" in a string) log the matches.

const str = "JavaScript is a versatile language. javascript can be used for both frontend and backend.";
const regex = /javascript/gi; // 'g' for global, 'i' for case-insensitive

const matches = str.match(regex);
console.log(matches); // ['JavaScript', 'javascript']


// const regex = /javascript/gi;: Defines a regular expression to match the word "javascript" globally and case-insensitively.
// str.match(regex);: Finds all matches in the string str based on the regular expression.
// console.log(matches);: Logs the matches found.