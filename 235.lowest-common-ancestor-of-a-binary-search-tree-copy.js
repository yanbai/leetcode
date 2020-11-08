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
var lowestCommonAncestor = function(root, p, q) {
    if(!root)
        return false
    if(root.left === p && root.right === q)
        return true
    if(root.right === p && root.left === q)
        return true
    // return lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q)

    function postOrder(node) {
        if(!!node) {
            postOrder(node.left)
            postOrder(node.right)
            console.log(node)
        }
    }

    return false
};

// @lc code=end

