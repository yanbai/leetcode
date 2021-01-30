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
// var isValidBST = function(node) {
//     if(!node)
//         return true
//     if(!node.left && !node.right)
//         return true
//     let stack = []
//     let current = node
//     let prev
//     while(current || stack.length) {
//         while(current) {
//             stack.push(current)
//             current = current.left
//         }
//         let node = stack.pop()
//         if(prev!==null && (node.val <= prev))
//             return false
//         prev = node.val
//         current = node.right
//     }
//     return true
// };

// Your runtime beats 6.52 % of javascript submissions
// Your memory usage beats 59.85 % of javascript submissions (42.6 MB)
function isValidBST(root) {
  function recursion(node, min, max) {
    if(!node)
      return true
    if(node.val <= min || node.val >= max)
      return false
    return recursion(node.left, min, node.val) && recursion(node.right, node.val, max)
  }
  return recursion(root, -Infinity, +Infinity)
}

// fail
// let temp
// function isValidBST(node) {
//   if(!node)
//     return true
//   if(!isValidBST(node.left))
//     return false
//   if(temp && (node.val <= temp))
//     return false
//   temp = node.val
//   if(!isValidBST(node.right))
//     return false
//   return true
// }


function Node(val, left, right) {
    this.left = (left === undefined) ? null : left
    this.right = (right === undefined) ? null : right
    this.val = (val === undefined) ? 0 : val
}
let a = new Node(5)
let b = new Node(1)
let c = new Node(4)
let d = new Node(3)
let e = new Node(6)

a.left = b
a.right = c
c.left = d
c.right = e
let res = isValidBST(a)
// @lc code=end

// 5
// 1 4
//   3 6
