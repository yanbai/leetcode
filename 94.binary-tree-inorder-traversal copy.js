/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root)
        return []
    let res = []
    let stack = []
    let current = root
    while(current || stack.length) {
        while(current) {
            stack.push(current)
            current = current.left
        }
        let node = stack.pop()
        res.push(node.val)
        current = node.right
    }
    return res
};
// @lc code=end

