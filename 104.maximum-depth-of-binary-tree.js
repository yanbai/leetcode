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
// const maxDepth = root => {
//     if(!root)
//         return 0
//     if(!root.left && !root.right)
//         return 1
//     return Math.max(
//         maxDepth(root.left),
//         maxDepth(root.right)
//     ) + 1
// }

// bfs
// function maxDepth(node) {
//   if(!node)
//     return 0
//   let [queue, level] = [[node], 0]
//   while(queue.length) {
//     level++
//     let size = queue.length
//     for(let i=0; i<size; i++) {
//       let temp = queue.shift()
//       if(temp.left)
//         queue.push(temp.left)
//       if(temp.right)
//         queue.push(temp.right)
//     }
//   }
//   return level
// }

// dfs
const maxDepth = root => {
  if(!root)
    return 0
  let stack = [[root, 1]]
  let depth = 0
  while(stack.length) {
    let current = stack.pop()
    let currentNode = current[0]
    let currentDepth = current[1]
    if(currentNode) {
      depth = Math.max(currentDepth, depth)
      if(currentNode.right)
        stack.push([currentNode.right, currentDepth+1])
      if(currentNode.left)
        stack.push([currentNode.left, currentDepth+1])
    }
  }
  return depth
}

function Node(val, left, right) {
  this.left = (left === undefined) ? null : left
  this.right = (right === undefined) ? null : right
  this.val = (val === undefined) ? 0 : val
}
let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)

a.left = b
a.right = c
b.left = d
b.right = e

let res = maxDepth(a)

// @lc code=end

