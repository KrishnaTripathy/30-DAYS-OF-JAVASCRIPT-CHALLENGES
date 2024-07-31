// 2. write a regular expression to match all sequences of one or more digits in a string. log the matches.

const str = "There are 123 apples and 4567 oranges.";
const regex = /\d+/g; // Match sequences of one or more digits globally

const matches = str.match(regex);
console.log(matches); // ['123', '4567']



// const regex = /\d+/g;: Defines a regular expression to match one or more digits in a sequence globally.
// str.match(regex);: Finds all sequences of digits in the string str based on the regular expression.
// console.log(matches);: Logs the matches found.