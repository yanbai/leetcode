/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
const maxDepth = root => {
    // BFS
    // if (!root) return 0
    // let queue = [root], n = 0
    // while (queue.length) {
    //     let arr = []
    //     while (queue.length) {
    //         let curr = queue.shift()
    //         if (curr.left) arr.push(curr.left)
    //         if (curr.right) arr.push(curr.right)
    //     }
    //     n++
    //     queue = arr
    // }
    // return n

    // recursion
    // run time 81.98, memory 5.14
    // if(!root)
    //     return 0
    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

    // DFS
    if(!root)
        return 0
    let stack = [root, 1]
    let depth = 0
    while(stack.size) {
        let current = stack.pop()
        let currentNode = current[0]
        let currentDepth = current[1]
        if(currentNode) {
            depth = Math.max(currentDepth, depth)
            if(currentNode.left)
                stack.push([currentNode.left, currentDepth+1])
            if(currentNode.right)
                stack.push([currentNode.right, currentDepth+1])
        }
    }
    return depth
}

// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @lc code=end

