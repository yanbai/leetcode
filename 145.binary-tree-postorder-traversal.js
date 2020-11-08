/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
    let stack = []
    let res = []
    stack.push(root)
    while(stack.length) {
        let node = stack.pop()
        if(!node)
            continue
        res.push(node.val)
        stack.push(node.left)
        stack.push(node.right)
    }
};

// @lc code=end

