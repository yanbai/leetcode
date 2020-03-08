/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let ret = [];
    let path = [];
    dfs(root);
    return ret;

    function dfs(node) {
        if (!node) {
            return;
        }
        path.push(node.val);
        if (!node.left && !node.right) {
            ret.push(path.join('->'));
        }
        dfs(node.left);
        dfs(node.right);
        path.pop();
    }
};
// @lc code=end

