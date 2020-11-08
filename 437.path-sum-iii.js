/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @return {number}
 */
function rootPathSum(node, sum) {
    if(!node)
        return 0
    let res = 0
    if(node.val === sum)
        res ++
    res += rootPathSum(node.left, sum-node.val) +
            rootPathSum(node.right, sum-node.val)
    return res
}
var pathSum = function(root, sum) {
    if(!root)
        return 0
    return rootPathSum(root, sum) +
        pathSum(root.left, sum) +
        pathSum(root.right, sum)
};
// function Node(val, left, right) {
//     this.left = (left === undefined) ? null : left
//     this.right = (right === undefined) ? null : right
//     this.val = (val === undefined) ? 0 : val
// }
// class BST {
//     constructor(root) {
//         this.root = null
//     }

//     insert(value) {
//         if(!this.root) {
//         this.root = new Node(value)
//         return
//         }
//         // iterating
//         let current = this.root
//         while(current) {
//         if(value <= current.val) {
//             if(current.left === null) {
//             current.left = new Node(value)
//             break
//             } else {
//             current = current.left
//             }
//         } else {
//             if(current.right === null) {
//             current.right = new Node(value)
//             break
//             } else {
//             current = current.right
//             }
//         }
//         }
//     }

//     inOrder(node) {
//         if(node === null)
//         return
//         this.inOrder(node.left)
//         console.log(node.val)
//         this.inOrder(node.right)
//     }

//     preOrder(node) {
//         if(node === null)
//         return
//         console.log(node.val)
//         this.preOrder(node.left)
//         this.preOrder(node.right)
//     }

//     postOrder(node) {
//         if(node === null)
//         return
//         this.postOrder(node.left)
//         this.postOrder(node.right)
//         console.log(node.val)
//     }

//     getMinNode(parent) {
//         let current = parent
//         while(current) {
//         if(!current.left)
//             break
//         current = current.left
//         }
//         return current
//     }

//     getMaxNode(parent) {
//         let current = parent
//         while(current) {
//         if(!current.right)
//             break
//         current = current.right
//         }
//         return current
//     }

//     find(val) {
//         let current = this.root
//         while(current) {
//         if(!current || current.val === val)
//             break
//         if(val <= current.val) {
//             current = current.left
//         } else {
//             current = current.right
//         }
//         }
//         return current ? current : null
//     }
// }

// let bst = new BST()
// bst.insert(10)
// bst.insert(5)
// bst.insert(-3)
// bst.insert(3)
// bst.insert(2)
// bst.insert(11)
// bst.insert(3)
// bst.insert(-2)
// bst.insert(1)
// console.log(pathSum(bst.root, 8))
// @lc code=end

