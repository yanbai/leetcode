/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
var rob = function(root) {
    let ans = countSum(root)
    function countSum(root) {
        if(!root)
            return [0, 0]
        let l = countSum(root.left)
        let r = countSum(root.right)

        let notRob = Math.max(l[0],l[1]) + Math.max(r[0], r[1])
        let rob = root.val + l[0] + r[0]
        return [notRob, rob]
    }
    return Math.max(ans[0], ans[1])
};
// @lc code=end

