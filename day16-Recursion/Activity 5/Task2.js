// 2. write a recursive function to calculate the depth of a binary tree. log the result for a few test cases.

function treeDepth(node) {
    if (node === null) return 0;
    return Math.max(treeDepth(node.left), treeDepth(node.right)) + 1;
  }
  
  // Define a simple binary tree for demonstration
  const tree1 = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: null
      }
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  };
  
  const tree2 = {
    value: 1,
    left: null,
    right: null
  };
  
  const tree3 = null; // Empty tree
  
  // Test the depth calculation
  console.log(treeDepth(tree1)); // Output: 3
  console.log(treeDepth(tree2)); // Output: 1
  console.log(treeDepth(tree3)); // Output: 0
  