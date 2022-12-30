/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

// * Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Thanks to Akih, Runtime 73 ms Beats 84.95
 var maxDepth = function(root) {
    let leftResult = 0;
    let rightResult = 0;
    if (!root) return 0; 
    if (root.left) leftResult = maxDepth(root.left);
    if (root.right) rightResult = maxDepth(root.right);

    // console.log(`right: ${rightResult}`)
    // console.log(`left: ${leftResult}`)
    // console.log('----------------')
    return Math.max(leftResult, rightResult)+1;
};

// Validate
let root = new TreeNode(3);
let e1 = new TreeNode(9);
let e2 = new TreeNode(20);
let e3 = new TreeNode(15);
let e4 = new TreeNode(7);
root.left = e1;
root.right = e2;
e2.left = e3;
e2.right = e4;
console.log(maxDepth(null)); // 0
console.log(maxDepth(root)); // 3