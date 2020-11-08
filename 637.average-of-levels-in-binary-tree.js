/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
var averageOfLevels = function(root) {
    if(!root)
        return []
    let res = []
    let queue = []
    queue.push(root)
    while(queue.length) {
        let count = queue.length
        let sum = 0
        for(let i=0; i<count; i++) {
            let node = queue.shift()
            sum += node.val
            if(node.left)
                queue.push(node.left)
            if(node.right)
                queue.push(node.right)
        }
        res.push(sum/count)
    }
    return res
};
// @lc code=end

