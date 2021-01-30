/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function(root) {
  // let res = 0
  // function dfs(node, innerRes, isStart) {
  //   if(!node.left && !node.right && !isStart) {
  //     res = Math.max(innerRes, res)
  //     return
  //   }
  //   dfs(node.left, innerRes+node.val, false)
  //   dfs(node.right, innerRes+node.val, false)
  // }

  // // let current = root
  // // while(current) {
  // //   dfs(current, 0, true)
  // //   current = current.left

  // // }
  // dfs(root.left)
  // dfs(root)
  // dfs(root.right)
  // if(!root)
  //   return 0
  // if(!root.left) {
  //   return Math.max(
  //     root.val,
  //     root.right.val,
  //     root.val + root.right.val, 
  //     maxPathSum(root.right)
  //   )  
  // } else if(!root.right) {
  //   return Math.max(
  //     root.val,
  //     root.left.val,
  //     root.val + root.left.val, 
  //     maxPathSum(root.left)
  //   )
  // } else {
  //   return Math.max(
  //     root.val,
  //     root.left.val,
  //     root.right.val,
  //     root.val + root.left.val + root.right.val, 
  //     root.val + root.left.val, 
  //     root.val + root.right.val,
  //     maxPathSum(root.left),
  //     maxPathSum(root.right)
  //   )
  // }
};
// @lc code=end

