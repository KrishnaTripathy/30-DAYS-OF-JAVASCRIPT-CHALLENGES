// Activity 2 : Reverse Integer

// 1. solve the "Reverse Integer" problem on leetcode.
// write a function that takes an integer and returns it with its digits reversed.
// handle edge cases like negative numbers and numbers ending in zero.
// log the reversed integers for a few test cases.



function reverseInteger(x) {
    // Defines a function named `reverseInteger` that takes an integer `x` as an argument.

    const sign = Math.sign(x);
    // Uses Math.sign to get the sign of the number `x`. This will be 1 if `x` is positive, -1 if `x` is negative, and 0 if `x` is zero.

    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    // Steps to reverse the digits of the absolute value of `x` and then apply the original sign:
    // 1. `Math.abs(x)`: Gets the absolute value of `x`, ensuring the number is positive.
    // 2. `.toString()`: Converts the absolute value to a string.
    // 3. `.split('')`: Splits the string into an array of characters.
    // 4. `.reverse()`: Reverses the array of characters.
    // 5. `.join('')`: Joins the reversed array back into a string.
    // 6. `parseInt(...)`: Converts the reversed string back into an integer.
    // 7. `* sign`: Multiplies the reversed integer by the original sign to restore its original positivity or negativity.

    if (reversed < -2147483648 || reversed > 2147483647) {
        return 0;
        // Checks if the reversed integer is outside the range of a 32-bit signed integer.
        // If it is, returns 0 to handle the integer overflow case.
    }

    return reversed;
    // Returns the reversed integer if it is within the valid range.
}

// Test cases
console.log(reverseInteger(123));   // Output: 321
// Explanation: 123 becomes 321 when reversed.

console.log(reverseInteger(-123));  // Output: -321
// Explanation: -123 becomes -321 when reversed, preserving the negative sign.

console.log(reverseInteger(120));   // Output: 21
// Explanation: 120 becomes 21 when reversed, with the leading zero dropped.

console.log(reverseInteger(0));     // Output: 0
// Explanation: 0 remains 0 when reversed.
