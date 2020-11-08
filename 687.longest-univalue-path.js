/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
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
var longestUnivaluePath = function (root) {
    let max = 0
    if (!root) return max
    const dfs = (node, superNodeVal) => {
      if (!node) return 0
      const left = dfs(node.left, node.val)
      const right = dfs(node.right, node.val)
      max = Math.max(max, left + right)

      return node.val === superNodeVal ? 1 + Math.max(left, right) : 0
    }
    dfs(root)
    return max
}

// @lc code=end

