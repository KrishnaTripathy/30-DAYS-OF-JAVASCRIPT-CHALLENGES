//Activity 4 : Binary Tree

// 1. Implement a  TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  
  console.log(root); // TreeNode { value: 1, left: TreeNode { value: 2, left: null, right: null }, right: TreeNode { value: 3, left: null, right: null } }
  