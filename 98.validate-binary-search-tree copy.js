/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
function helper(root, lower, upper) {
    if(!root)
        return true
    if(root.val <= lower || root.val >= upper)
        return false
    return helper(root.left, lower, root.val) &&
        helper(root.right, root.val, upper)
}
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity)
};
// @lc code=end
