// 2. write a regular expression to match a word only if it is at the end of astring. log the matches.

const str = "Welcome to the party";
const regex = /\bparty$/; // Match 'party' only if it's at the end of the string

const match = str.match(regex);

if (match) {
  console.log(`Match: ${match[0]}`);
} else {
  console.log("No match found");
}




// const regex = /\bparty$/;: Defines a regular expression to match the word "party" only if it appears at the end of the string.
// \b asserts a word boundary to ensure "party" is a complete word.
// $ asserts the position at the end of the string.
// str.match(regex);: Matches the string against the regular expression.
// console.log(...): Logs the match found.





