/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
// var preorderTraversal = function(root) {
//     let stack = []
//     let current = root
//     function traverse(node) {
//         if(!node)
//             return
//         stack.push(node.val)
//         traverse(node.left)
//         traverse(node.right)
//     }

//     traverse(root)
//     return stack
// };

function preorderTraversal(root) {
    let res = []
    let stack = []
    stack.push(root)
    while(stack.length) {
        let node = stack.pop()
        if(!node)
            continue
        res.push(node.val)
        stack.push(node.right)
        stack.push(node.left)
    }
    return res
}
// @lc code=end

