// 2. write a regular expression to capture the username and domain from an email address. log the captures.


const email = "username@example.com";
const regex = /^(\w+)@([\w.]+)$/;

const match = email.match(regex);

if (match) {
  const [fullMatch, username, domain] = match;
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No match found");
}




// const regex = /^(\w+)@([\w.]+)$/;: Defines a regular expression to match the email address format and capture the username and domain.
// (\w+) captures the username.
// ([\w.]+) captures the domain (including subdomains and dots).
// email.match(regex);: Matches the email address against the regular expression and captures the groups.
// console.log(...): Logs the captured username and domain.





