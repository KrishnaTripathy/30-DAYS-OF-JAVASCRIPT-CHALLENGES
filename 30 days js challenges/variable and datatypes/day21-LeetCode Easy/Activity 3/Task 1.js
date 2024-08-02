// Activity 3 : Palindrome Number 

// 1. solve the "palindrome number" problem on leetcode.
// write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// log the result for a few test CSSNamespaceRule, including edge cases like negative numbers .


function isPalindrome(x) {
    if (x < 0) return false; // Negative numbers are not palindromes
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome(121));    // Output: true
console.log(isPalindrome(-121));   // Output: false
console.log(isPalindrome(10));     // Output: false
console.log(isPalindrome(0));      // Output: true





// Explanation:

// function isPalindrome(x) { - Defines a function named isPalindrome that takes an integer x as an argument.
// if (x < 0) return false; - Checks if x is negative. If it is, returns false because negative numbers are not palindromes.
// const str = x.toString(); - Converts the integer x to a string.
// return str === str.split('').reverse().join(''); -
// str.split(''): Splits the string into an array of its characters.
// .reverse(): Reverses the order of elements in the array.
// .join(''): Joins the elements of the array back into a string.
// str === ...: Compares the original string with the reversed string to check if they are the same.
// } - Ends the function definition.
// Test cases demonstrate the function's behavior with various inputs, including positive numbers, negative numbers, numbers ending in zero, and zero itself.