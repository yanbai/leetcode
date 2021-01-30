/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */

// 34/34 cases passed (84 ms)
// Your runtime beats 65.79 % of javascript submissions
// Your memory usage beats 91.75 % of javascript submissions (39.8 MB)
var levelOrder = function(root) {
  if(!root)
    return []
  let queue = [root]
  let res = []
  while(queue.length) {
    let temp = []
    for(let i=0, len = queue.length; i<len; i++) {
      let item = queue.shift()
      if(item.left)
        queue.push(item.left)
      if(item.right)
        queue.push(item.right)
      temp.push(item.val)
    }
    res.push(temp)
  }
  return res
};
// @lc code=end

