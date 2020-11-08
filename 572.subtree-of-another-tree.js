/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isRootSubtree(s, t) {
    if(!s && !t)
        return true
    if(!s || !t)
        return false
    if(s.val !== t.val)
        return false
    return isRootSubtree(s.left, t.left) && isRootSubtree(s.right, t.right)
}
var isSubtree = function(s, t) {
    if(!s)
        return false
    return isRootSubtree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};
// @lc code=end

