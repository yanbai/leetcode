/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
var lowestCommonAncestor = function(root, p, q) {
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
};

// function lowestCommonAncestor(root, p, q) {
//     let res
//     function dfs(root, p, q) {
//         if(!root)
//             return false
//         const lson = dfs(root.left, p, q)
//         const rson = dfs(root.right, p, q)
//         if (
//             (lson && rson) || 
//             ((root.val === p.val || root.val === q.val) && 
//             (lson || rson))
//         ) {
//             res = root;
//         }
//         return lson || 
//             rson || 
//             (root.val === p.val || 
//             root.val === q.val);
//     }
//     return res
// }
// @lc code=end

