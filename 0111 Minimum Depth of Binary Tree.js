/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/


//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Thanks to Akih! Runtime 230 ms Beats 96.60% Memory 83.2 MB Beats 71.30%  
var minDepth = function(root) {
    let rightResult = 0;
    let leftResult = 0;
    if (!root) return 0;
    if (root.right) {
        rightResult = minDepth(root.right);
    }
    if (root.left) {
        leftResult = minDepth(root.left);
    }
    // console.log(`val: ${root.val}`);
    // console.log(`rightResult is :${rightResult}`);
    // console.log(`leftResult is :${leftResult}`);
    // console.log('----');
    
    if (leftResult !== 0 && rightResult !== 0){
        return Math.min(leftResult, rightResult)+1;
    }
    else {
        return Math.max(leftResult, rightResult)+1;
    }
};

// Validate
// console.log(minDepth(null)); // 0

// Validate2
let root = new TreeNode(3);
let e1 = new TreeNode(9);
let e2 = new TreeNode(20);
let e3 = new TreeNode(15);
let e4 = new TreeNode(7);
root.left = e1;
root.right = e2;
e2.left = e3;
e2.right = e4;
console.log(minDepth(root)); // 2

// Validate3
// let root = new TreeNode(2);
// let e1 = new TreeNode(3);
// let e2 = new TreeNode(4);
// let e3 = new TreeNode(5);
// let e4 = new TreeNode(6);
// root.right = e1;
// e1.right = e2;
// e2.right = e3;
// e3.right = e4;
// console.log(minDepth(root)); // 5