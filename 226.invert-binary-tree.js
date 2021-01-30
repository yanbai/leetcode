/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// runtime 41, memory 5
// var invertTree = function(root) {
//     if(!root)
//         return null
//     invertTree(root.left)
//     invertTree(root.right)
//     let temp = root.left
//     root.left = root.right
//     root.right = temp
//     return root
// };

// 68/68 cases passed (84 ms)
// Your runtime beats 25.5 % of javascript submissions
// Your memory usage beats 53.91 % of javascript submissions (38.8 MB)
var invertTree = function(root) {
  if(!root)
    return null
  let temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)
  return root
};
// @lc code=end

