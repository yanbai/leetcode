/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
var findBottomLeftValue = function(root) {
    let queue = []
    queue.push(root)
    while(queue.length) {
        root = queue.shift()
        if(root.right)
            queue.push(root.right)
        if(root.left)
            queue.push(root.left)
    }
    return root.val
};

// Your runtime beats 5.19 % of javascript submissions
// Your memory usage beats 75.32 % of javascript submissions (42.8 MB)
// function findBottomLeftValue(root) {
//   if(!root)
//     return null
//   let [res, queue] = [0, [root]]
//   while(queue.length) {
//     let count = queue.length
//     for(let i=0; i<count; i++) {
//       if(i===0)
//         res = queue[i].val
//       let temp = queue.shift()
//       if(temp.left)
//         queue.push(temp.left)
//       if(temp.right)
//         queue.push(temp.right)
//     }
//   }
//   return res
// }

// @lc code=end

