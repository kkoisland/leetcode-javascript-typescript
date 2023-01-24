// Runtime 237 ms Beats 98.57% Memory 82.8 MB Beats 85.24%

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    if (!root.left && !root.right) return 1
    if (root.left && !root.left.left && !root.left.right ||
        root.right && !root.right.left && !root.right.right) return 2;
    const l = root.left ? minDepth(root.left) : Number.MAX_VALUE; 
    const r = root.right ? minDepth(root.right) : Number.MAX_VALUE;
    return Math.min(l, r) + 1;
};

