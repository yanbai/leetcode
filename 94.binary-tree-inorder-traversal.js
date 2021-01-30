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
// Your runtime beats 5.14 % of javascript submissions
// Your memory usage beats 95.95 % of javascript submissions (38.2 MB)
var inorderTraversal = function(root) {
    if(!root)
        return []
    let stack = []
    let current = root
    let res = []

    while (current || stack.length) {
        while(current) {
            stack.push(current)
            current = current.left
        }
        let node = stack.pop()
        res.push(node.val)
        current = node.right
    }
    return res
}


// 有左边 进入左边
// 没有左边 出栈，存结果
// 有右边 进右边
// 没有

// 有left 跳到left /left入栈
// !left !right 记录当前 跳到栈顶
// !left 有right 记录当前 跳到right /right入栈

// fail
// https://www.bilibili.com/video/BV1f4411D7DY?from=search&seid=8788700823563911726
// function inorderTraversal(node) {
//   const [res, stack] = [[], []]
//   while(node || stack.length) {
//     while(node) {
//       stack.push(node)
//       node = node.left
//     }
//     node = stack.pop()
//     res.push(node.val)
//     node = node.right
//   }
//   return res
// }
// @lc code=end

