/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function(root) {
    // BFS
    // let queue = root
    // while(queue.length) {
    //     let arr = []
    //     while(queue.length) {
    //         let node = queue.shift()
    //         if(node.left)
    //             arr.push(node.left)
    //         if(node.right)
    //             arr.push(node.right)
    //     }
    //     queue = arr
    // }

    // recursion
    // runtime 82.17 memory 9
    // function depth(node) {
    //     if(node === null)
    //         return 0
    //     return Math.max(depth(node.left), depth(node.right)) + 1
    // }

    // if(root === null)
    //     return true
    // if(Math.abs(depth(root.left) - depth(root.right)) > 1)
    //     return false
    // return isBalanced(root.left) && isBalanced(root.right)

    // DFS
    // let stack = [root]
    // let res = []
    // while(stack.length) {
    //     let node = stack.pop()
    //     res.push(node)
    //     if(stack.right)
    //         stack.push(node.right)
    //     if(stack.left)
    //         stack.push(node.left)        
    // }
    let res = true
    function depth(node) {
        if(node === null)
            return 0
        let l = depth(node.left)
        let r = depth(node.right)
        if(Math.abs(l-r) > 1)
            res = false
        return Math.max(l, r) + 1
    }
    depth(root)
    return res
};
// @lc code=end

