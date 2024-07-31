// Activity 3 : Grouping and Capturing

// 1. write a regular expression to capture the area code, central office code, and line number from a US phone number format log the capture.


const phoneNumber = "(123) 456-7890";
const regex = /^\((\d{3})\) (\d{3})-(\d{4})$/;

const match = phoneNumber.match(regex);

if (match) {
  const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match;
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No match found");
}




// const regex = /^\((\d{3})\) (\d{3})-(\d{4})$/;: Defines a regular expression to match the US phone number format (123) 456-7890 and capture the area code, central office code, and line number.
// (\d{3}) captures the area code.
// (\d{3}) captures the central office code.
// (\d{4}) captures the line number.
// phoneNumber.match(regex);: Matches the phone number against the regular expression and captures the groups.
// console.log(...): Logs the captured area code, central office code, and line number.





