// Activity 3 : String Manipulation with recursion

// 1.write a recursive function to reverse astring.log the result for a few test cases.

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
  }
  
  // Test cases
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("world")); // Output: "dlrow"
  console.log(reverseString(""));      // Output: ""
  