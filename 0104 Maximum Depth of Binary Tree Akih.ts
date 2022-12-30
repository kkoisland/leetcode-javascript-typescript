// Runtime 76 ms Beats 86.86%
// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function maxDepth(root: TreeNode | null): number {
  const depths: number[] = [0];
  const dig = (node: TreeNode, depth: number) => {
    // console.log(`--in-- ${depth} ${node.val}`)
    if (!node.left && !node.right) { 
      // console.log(`--push-- ${depth} ${node.val}`)
      depths.push(depth); 
    } else {
      node.left && dig(node.left, depth+1);
      node.right && dig(node.right, depth+1);
    }
  }

  root && dig(root, 1);
  // console.log(depths)
  return Math.max(...depths)
};
