// Activity 5: Group Anagrams

//1. solve the "Group Anagrams" problem on leetcode.
// write a function that takes an array of strings and groups anagrams together.
// log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
    const map = new Map();
  
    for (const str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!map.has(sortedStr)) {
        map.set(sortedStr, []);
      }
      map.get(sortedStr).push(str);
    }
  
    return Array.from(map.values());
  }

  
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""]));              
// Output: [[""]]

console.log(groupAnagrams(["a"]));             
// Output: [["a"]]

console.log(groupAnagrams(["ab", "ba", "abc", "cba", "bca"])); 
// Output: [["ab", "ba"], ["abc", "cba", "bca"]]



// Explanation
// Initialize a Map:

// const map = new Map(): Create a map to store grouped anagrams. The key will be the sorted version of the string, and the value will be an array of anagrams.
// Iterate Over Each String:

// for (const str of strs): Loop through each string in the input array.
// const sortedStr = str.split('').sort().join(''): Sort the characters of the string to generate a key that will be the same for all anagrams.
// if (!map.has(sortedStr)) { map.set(sortedStr, []); }: If the map doesn't already have this sorted string as a key, create a new entry with an empty array.
// map.get(sortedStr).push(str): Add the original string to the array corresponding to the sorted string key.
// Return Grouped Anagrams:

// return Array.from(map.values()): Convert the values of the map to an array and return it. Each value is an array of anagrams.

// ["eat", "tea", "tan", "ate", "nat", "bat"]: The grouped anagrams are [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].
// [""]: The grouped anagrams are [[""]].
// ["a"]: The grouped anagrams are [["a"]].
// ["ab", "ba", "abc", "cba", "bca"]: The grouped anagrams are [["ab", "ba"], ["abc", "cba", "bca"]].
// This solution sorts each string to use as a key and groups all anagrams efficiently using a map, achieving a time complexity of O(n * k * log k), where n is the number of strings and k is the maximum length of a string.