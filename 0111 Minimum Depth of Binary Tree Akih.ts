/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// Runtime 245 ms Beats 94.39% Memory 100 MB Beats 14.49% 49

function minDepth(root: TreeNode | null): number {
    let l: number = 0; 
    let r: number = 0;
    if (!root) return 0;
    if (!root.left && !root.right) return 1
    if (root.left && !root.left.left && !root.left.right ||
        root.right && !root.right.left && !root.right.right) {
        return 2;
    }
    if (root.left) l = minDepth(root.left); 
    if (root.right) r = minDepth(root.right);
    if (!l) l = r;
    if (!r) r = l;
    return Math.min(l, r) + 1;
};

