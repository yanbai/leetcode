/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
    if(!root || root === p || root === q)
        return root
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if(!left) {
        return right
    } else if (!right) {
        return left
    } else {
        return root
    }
}

// let bst = new BST()
// bst.insert(3)
// bst.insert(1)
// bst.insert(4)
// bst.insert(2)
// // bst.insert(4)
// // bst.insert(7)
// // bst.insert(9)
// // bst.insert(3)
// // bst.insert(5)

// a = lowestCommonAncestor(bst.root, 2, 3)
// console.log(a)
// @lc code=end

