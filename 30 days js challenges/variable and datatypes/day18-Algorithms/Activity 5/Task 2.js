// 2. write a function to solve the knapsack problem using dynamic programming . log the max value that can be obtained.

function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(capacity + 1).fill(0);
  
    for (let i = 0; i < n; i++) {
      for (let w = capacity; w >= weights[i]; w--) {
        dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
      }
    }
  
    return dp[capacity];
  }
  
  // Example usage:
  const weights = [1, 2, 3];
  const values = [60, 100, 120];
  const capacity = 5;
  console.log(knapsack(weights, values, capacity)); // 220

  


//   knapsack(weights, values, capacity): Solves the knapsack problem by iterating through each item and updating the maximum values for each weight capacity using dynamic programming. The console.log statement prints the maximum value that can be obtained given the weights, values, and capacity.





