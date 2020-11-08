/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
// DFS runtime 60, memory 5
var hasPathSum = function(root, sum) {
    if (root === null)
        return false
    if (root.left === null && root.right === null && sum === root.val)
        return true
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val)
};

// BFS
// var hasPathSum = function(root, sum) {
//     if (root === null)
//         return false
//     let stack = [[root, root.val]]
//     // queue.push(root.val)
//     while(stack.length) {
//         let [node, pathSum] = stack.pop()
//         let { left: lc, right: rc } = node
//         if(pathSum === sum && !rc && !lc)
//             return true
//         // 前序遍历，需要先将右节点入栈，这样出栈时为左节点先出栈
//         if(rc)
//             stack.push([rc, pathSum + rc.val])
//         if(lc)
//             stack.push([lc, pathSum + lc.val])
//     }
//     return false
// };
// @lc code=end

