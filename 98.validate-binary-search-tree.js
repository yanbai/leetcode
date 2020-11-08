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
// var isValidBST = function(root) {
//     function helper(node, smallest, biggest) {
//         if(!node)
//             return true
//         if(node.val <= smallest || node.val >= biggest)
//             return false
//         return helper(node.left, smallest, node.val) && 
//         helper(node.right, node.val, biggest)
//     }
//     return helper(root, -Infinity, +Infinity)
// };

var isValidBST = function(node) {
    if(!node)
        return true
    if(!node.left && !node.right)
        return true
    let stack = []
    let current = node
    let prev
    while(current || stack.length) {
        while(current) {
            stack.push(current)
            current = current.left
        }
        let node = stack.pop()
        if(prev!==null && (node.val <= prev))
            return false
        prev = node.val
        current = node.right
    }
    return true
};

// function Node(val, left, right) {
//     this.left = (left === undefined) ? null : left
//     this.right = (right === undefined) ? null : right
//     this.val = (val === undefined) ? 0 : val
// }
// let a = new Node(5)
// let b = new Node(1)
// let c = new Node(4)
// let d = new Node(3)
// let e = new Node(6)

// a.left = b
// a.right = c
// c.left = d
// c.right = e
// let res = isValidBST(a)
// @lc code=end

// 5
// 1 4
//   3 6
