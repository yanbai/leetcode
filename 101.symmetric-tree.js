/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
    function isMirror(t1, t2) {
        if(!t1 && !t2)
            return true
        if(!t1 || !t2)
            return false
        return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
    }
    if(!root)
        return true
    return isMirror(root.left, root.right)
};


// this method is wrong, it will be very troublesome
// require process edge scenario: [1,2,2]
// you can't treat [2,3,4] and [2,4,3] as min unit
// you need to treat [2] and [2] as min unit

// var isSymmetric = function(root) {
//     function isMirror(t1, t2) {
//         if(!t1 && !t2)
//             return true
//         if(!t1 || !t2)
//             return false
//         if(t1.val !== t2.val)
//             return false
//         if(t1.left && 
//             t1.right && 
//             t2.left && 
//             t2.right && 
//             t1.left.val === t2.right.val && 
//             t1.right.val === t2.left.val)
//             return true
//         isMirror(t1.left, t2.right)
//         isMirror(t1.right, t2.left)
//         return false
//     }
//     if(!root)
//         return true
//     return isMirror(root.left, root.right)
// };
// @lc code=end

