// Activity 3 : String Algorithims

// 1. Write a functin to count the occurrences of each character in a string. log the character counts.


function countCharacters(str) {
    const counts = {};
  
    for (const char of str) {
      counts[char] = (counts[char] || 0) + 1;
    }
  
    console.log(counts);
  }
  
  // Example usage:
  const text = "hello world";
  countCharacters(text); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
  