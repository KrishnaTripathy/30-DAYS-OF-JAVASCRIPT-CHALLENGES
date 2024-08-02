// Activity 5 : Valid Parentheses

//1. solve the "valid parenthesis" problem on leetcode.
// write a function that takes a string containing just the chars '(','),'{,}''['and']', and determines if the input string is valid.
// a string is valid if open brackets are closed in the correct order.
// log the result for a few test cases.


function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (map[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([)]"));     // Output: false
console.log(isValid("{[]}"));     // Output: true
console.log(isValid(""));         // Output: true




// Explanation:

// function isValid(s) { - Defines a function named isValid that takes a string s as an argument.
// const stack = []; - Initializes an empty stack to keep track of opening brackets.
// const map = { '(': ')', '{': '}', '[': ']' }; - Defines a map object to match opening brackets with their corresponding closing brackets.
// for (let char of s) { - Iterates through each character in the string s.
// if (map[char]) { stack.push(char); } - If the character is an opening bracket, pushes it onto the stack.
// else { const top = stack.pop(); if (map[top] !== char) { return false; } } - If the character is a closing bracket, pops the top element from the stack and checks if it matches the corresponding opening bracket. If it doesn't match, returns false.
// return stack.length === 0; - After iterating through the string, checks if the stack is empty. If it is, returns true, indicating that the string is valid. If it's not empty, returns false.
// } - Ends the function definition.
// The test cases demonstrate how the function works with different inputs, including valid and invalid strings of parentheses, as well as an empty string.