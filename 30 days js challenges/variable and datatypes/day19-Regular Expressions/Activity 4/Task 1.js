// Activity 4 : Assertions and Boundaries

// 1. write a regular expression to match a word only if it is at the beginning of a string . Log the matches.

const str = "Hello world, Hello universe";
const regex = /^Hello\b/; // Match 'Hello' only if it's at the beginning of the string

const match = str.match(regex);

if (match) {
  console.log(`Match: ${match[0]}`);
} else {
  console.log("No match found");
}


// const regex = /^Hello\b/;: Defines a regular expression to match the word "Hello" only if it appears at the beginning of the string.
// ^ asserts the position at the start of the string.
// \b asserts a word boundary to ensure "Hello" is a complete word.
// str.match(regex);: Matches the string against the regular expression.
// console.log(...): Logs the match found.