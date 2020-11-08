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
// runtime 78, memory 10
var diameterOfBinaryTree = function(root) {
    let res = 0
    function depth(node) {
        if(!node)
            return 0
        let l = depth(node.left)
        let r = depth(node.right)
        if((l+r) > res)
            res = l+r
        return Math.max(l, r) + 1
    }
    depth(root)
    return res
};
// @lc code=end

