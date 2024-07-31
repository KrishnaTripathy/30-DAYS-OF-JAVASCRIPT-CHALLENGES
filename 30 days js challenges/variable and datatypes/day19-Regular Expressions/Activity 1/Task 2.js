// 2. write a regular expression to match all digits in a string. Log the matches.

const str = "The year is 2024 and the temperature is 18°C.";
const regex = /\d+/g; // Match one or more digits globally

const matches = str.match(regex);
console.log(matches); // ['2024', '18']



// const regex = /\d+/g;: Defines a regular expression to match one or more digits globally.
// str.match(regex);: Finds all sequences of digits in the string str based on the regular expression.
// console.log(matches);: Logs the matches found.





