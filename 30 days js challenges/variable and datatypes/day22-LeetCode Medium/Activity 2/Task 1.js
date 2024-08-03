// Activity 2: Longest Substring without Repeating Chars.

// 1.  solve the "longest substring without repeating chars."problem on leetcode.
// write a function that takes a string and returns the length of the longest substring without repeating chars.
// log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
    let seen = new Map();
    let maxLen = 0;
    let start = 0;
  
    for (let end = 0; end < s.length; end++) {
      if (seen.has(s[end])) {
        start = Math.max(seen.get(s[end]) + 1, start);
      }
      seen.set(s[end], end);
      maxLen = Math.max(maxLen, end - start + 1);
    }
  
    return maxLen;
  }

  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // Output: 0 (empty string)
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3 ("vdf")


// Explanation
// Initialization:

// seen = new Map(): A map to store the characters and their latest indices.
// maxLen = 0: A variable to track the maximum length of substrings without repeating characters.
// start = 0: A pointer to mark the start of the current substring.
// Iterate Over the String:

// for (let end = 0; end < s.length; end++): Iterate over each character in the string with the end pointer.
// if (seen.has(s[end])): Check if the character has been seen before.
// start = Math.max(seen.get(s[end]) + 1, start): If the character has been seen, move the start pointer to the right of the last occurrence of the character to avoid repeating characters in the substring.
// seen.set(s[end], end): Update the map with the current character and its index.
// maxLen = Math.max(maxLen, end - start + 1): Update the maximum length if the current substring is longer.
// Return the Result:

// return maxLen: Return the length of the longest substring without repeating characters.

// "abcabcbb": The longest substring without repeating characters is "abc", with a length of 3.
// "bbbbb": The longest substring without repeating characters is "b", with a length of 1.
// "pwwkew": The longest substring without repeating characters is "wke", with a length of 3.
// "": An empty string has a length of 0.
// "dvdf": The longest substring without repeating characters is "vdf", with a length of 3.
// This solution efficiently tracks the characters and their indices using a map and updates the start pointer to ensure substrings without repeating characters, achieving a time complexity of O(n).






