// Activity 5 : Word Ladder 

// 1. Solve the "Word Ladder" problem on leetcode
// write a function that takes a begin word, an end word, and a dictionary of words, and 
//find the lengths of the shortest transformation sequence from the begin word to the end word, such that only one 
// letter can be changed at a time and each transformed word must exist in the word list.
// log the length of the shortest transformation sequence for a few test cases.


function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]]; // [currentWord, level]
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [word, level] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                const newWord = word.substring(0, i) + String.fromCharCode(c) + word.substring(i + 1);
                
                if (newWord === endWord) return level + 1;
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    visited.add(newWord);
                }
            }
        }
    }

    return 0;
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0
console.log(ladderLength("a", "c", ["a","b","c"])); // Output: 2



// Explanation
// Initialize BFS:

// Use a queue to keep track of the current word and the number of transformations.
// Use a set to store the words that have already been visited to avoid cycles.
// Process Each Word:

// For each word, generate all possible transformations by changing one letter at a time.
// If the transformed word is the end word, return the current transformation length plus one.
// If the transformed word is in the dictionary and not visited yet, add it to the queue.
// Continue Until Solution is Found:

// If the queue is exhausted without finding the end word, return 0 indicating no transformation sequence exists.

// BFS: Ensures that the shortest path is found by exploring all possible transformations level by level.
// Visited Set: Prevents re-processing of words and avoids cycles.
// Transformation Generation: Each letter in the word is changed to every possible letter to find valid words in the dictionary.