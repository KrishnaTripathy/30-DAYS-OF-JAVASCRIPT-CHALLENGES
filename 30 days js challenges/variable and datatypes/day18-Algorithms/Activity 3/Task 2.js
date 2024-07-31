// 2. write a function to find the longest substring without repeating chars in a string. Log the length of the substring.

function longestUniqueSubstringLength(s) {
    let start = 0, maxLength = 0;
    const map = new Map();
  
    for (let end = 0; end < s.length; end++) {
      if (map.has(s[end])) {
        start = Math.max(map.get(s[end]) + 1, start);
      }
      map.set(s[end], end);
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    console.log(maxLength);
  }
  
  // Example usage:
  const str = "abcabcbb";
  longestUniqueSubstringLength(str); // 3

  



//   longestUniqueSubstringLength(s): Uses a sliding window technique with a Map to keep track of the last occurrence of each character, adjusting the start of the window when a duplicate is found, and updating the maximum length of the substring without repeating characters. The console.log statement prints the length of the longest substring.





