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
var invertTree = function(root) {
    if(!root)
        return null
    invertTree(root.left)
    invertTree(root.right)
    let temp = root.left
    root.left = root.right
    root.right = temp
    return root
};
// @lc code=end

