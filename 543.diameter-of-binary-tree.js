/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 * @return {number}
 */
// Your runtime beats 13.4 % of javascript submissions
// Your memory usage beats 14.45 % of javascript submissions (42.6 MB)
function diameterOfBinaryTree(root) {
  let max = 0
  function depth(node) {
    if(!node)
      return 0
    let [l, r] = [depth(node.left), depth(node.right)]
    max = Math.max(l+r, max)
    return Math.max(l, r) + 1
  }
  depth(root)
  return max
}

// @lc code=end

