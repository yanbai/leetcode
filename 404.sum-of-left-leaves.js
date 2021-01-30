/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
// var sumOfLeftLeaves = function(root) {
//     if(!root) return 0;
//     if(root.left) {
//         if(isLeaf(root.left)) {
//             return root.left.val + sumOfLeftLeaves(root.right)
//         }else {
//             return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
//         }
//     } else {
//          return sumOfLeftLeaves(root.right)
//     }

// };

// function isLeaf(node) {
//     if(!node) return false
//     if(!node.left && !node.right) return true
// }

function sumOfLeftLeaves(root) {
  if(!root || (!root.left && !root.right))
    return 0
  let [res, queue] = [0, [root]]
  while(queue.length) {
    let count = queue.length
    for(let i=0; i<count; i++) {
      let temp = queue.shift()
      if(temp.left && (!temp.left.left && !temp.left.right))
        res+=temp.left.val
      if(temp.left)
        queue.push(temp.left)
      if(temp.right)
        queue.push(temp.right)
    }
  }
  return res
}
// @lc code=end

