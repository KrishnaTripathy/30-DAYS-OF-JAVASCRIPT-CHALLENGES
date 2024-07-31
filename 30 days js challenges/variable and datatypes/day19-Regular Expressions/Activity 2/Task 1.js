// Activity 2 : Character Classes and Quantifiers

// 1. write a regular expression to match all words in a string that start with a capital letter. log the matches.


const str = "Alice and Bob went to Paris and New York.";
const regex = /\b[A-Z][a-z]*\b/g; // Match words starting with a capital letter

const matches = str.match(regex);
console.log(matches); // ['Alice', 'Bob', 'Paris', 'New', 'York']




// const regex = /\b[A-Z][a-z]*\b/g;: Defines a regular expression to match words that start with a capital letter.
// \b asserts a word boundary.
// [A-Z] matches a capital letter.
// [a-z]* matches zero or more lowercase letters following the capital letter.
// str.match(regex);: Finds all matching words in the string str.
// console.log(matches);: Logs the matches found.





