// Activity 5 (optional) : Tree Traversal

// 1. write a recursive function to perform an in-order traversal of a binary tree. log the nodes as they are visited.

function inOrderTraversal(node) {
    if (node === null) return;
    
    inOrderTraversal(node.left);   // Visit left subtree
    console.log(node.value);       // Visit node itself
    inOrderTraversal(node.right);  // Visit right subtree
  }
  
  // Define a simple binary tree for demonstration
  const tree = {
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
  
  // Test the traversal
  inOrderTraversal(tree); // Output: 4, 2, 5, 1, 3
  