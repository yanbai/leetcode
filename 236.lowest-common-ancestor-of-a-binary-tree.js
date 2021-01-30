/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 31/31 cases passed (96 ms)
// Your runtime beats 74.14 % of javascript submissions
// Your memory usage beats 42.21 % of javascript submissions (48.1 MB)
// lowestCommonAncestor is actually findPorQ

// var lowestCommonAncestor = function(node, p, q) {
//   if(!node)
//     return null
//   if(node === p || node===q)
//     return node
  
//   let left = lowestCommonAncestor(node.left, p, q)
//   let right = lowestCommonAncestor(node.right, p, q)
//   if(!left)
//     return right
//   if(!right)
//     return left
//   return node
// };

function lowestCommonAncestor(node, p, q) {
  if(!node || node === p || node === q) 
    return node
  let left = lowestCommonAncestor(node.left, p, q)
  let right = lowestCommonAncestor(node.right, p, q)
  return !left ? right : !right ? left : node
}
// @lc code=end

