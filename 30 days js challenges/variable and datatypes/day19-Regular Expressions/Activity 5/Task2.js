// 2. write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com/path?query=123";

const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}([\/\w .-]*)*\/?$/;

const isValid = regex.test(url);
console.log(isValid ? "URL is valid" : "URL is invalid");



// const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}([\/\w .-]*)*\/?$/;: Defines a regular expression to match:
// ^(https?:\/\/)? optionally matches http:// or https://.
// ([a-zA-Z0-9-]+\.)+ matches domain names with dots.
// [a-zA-Z]{2,6} matches the top-level domain (TLD).
// ([\/\w .-]*)*\/?$ optionally matches the path and query parameters.
// regex.test(url);: Tests if the URL matches the regular expression.
// console.log(...): Logs whether the URL is valid or invalid.