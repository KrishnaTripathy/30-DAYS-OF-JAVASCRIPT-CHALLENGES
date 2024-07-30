// 2. write a recursive function to check if a string is a palindrome. log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
  
  // Test cases
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello"));   // Output: false
  console.log(isPalindrome("madam"));   // Output: true
  