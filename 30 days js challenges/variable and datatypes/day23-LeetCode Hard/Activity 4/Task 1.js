// Activity 4: N-Queens

// 1. solve the "N-queens" problem on leetcode.
// write a function that places n queens on nXn chessboard such that no two queens attack each other.
// and returns all distinct solutions to the n-queens puzzle.
// log the distinct solutions for a few test cases.

function solveNQueens(n) {
    const solutions = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));

    function backtrack(row, cols, diag1, diag2) {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            const d1 = row - col + n - 1;
            const d2 = row + col;
            if (cols[col] || diag1[d1] || diag2[d2]) continue;
            board[row][col] = 'Q';
            cols[col] = diag1[d1] = diag2[d2] = true;
            backtrack(row + 1, cols, diag1, diag2);
            board[row][col] = '.';
            cols[col] = diag1[d1] = diag2[d2] = false;
        }
    }

    backtrack(0, Array(n).fill(false), Array(2 * n - 1).fill(false), Array(2 * n - 1).fill(false));
    return solutions;
}

// Test cases
console.log(solveNQueens(4)); // Output: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]
console.log(solveNQueens(8)); // Output: (All 92 distinct solutions for 8 queens)



// Explanation
// Backtracking:

// Use a recursive function to place queens row by row.
// For each row, try placing a queen in each column and check if it’s safe (i.e., no other queens are attacking).
// Safety Check:

// Ensure no two queens are in the same column, row, or diagonal.
// Solution Storage:

// Once all queens are placed safely, store the board configuration as a solution.
// Convert to Board Format:

// Convert the list of column indices for each row into a readable board format for the output.


// Backtracking: This technique explores all possible placements and backtracks when it encounters an invalid state.
// Safety Checks: Ensure that the current placement of a queen does not conflict with any previously placed queens by tracking columns and diagonals.
// Result Format: Convert the result into a string representation of the board where queens are denoted by 'Q' and empty spaces by '.'.





