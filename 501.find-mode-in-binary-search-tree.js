/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
 * @return {number[]}
 */
var findMode = function(root) {
    // 1.中序遍历当前值和上一个值比较是否相同。相同则加1，不相同count就是1表示当前是一个新元素
    //没比较一次就要看是否更新最大值
    //如果count>max就更新最大值，清空结果数组，添加新的数据到结果数组
    //如果count= max就说明当前出新次数和之前出现的次数一样多，直接添加新数据到结果数组
    let prenode = null;
    let count = 1;
    let max = 1; let res = [];
    const helper = (root) => {
        if(!root) return;
        helper(root.left);
        if(prenode) {
            if(root.val==prenode.val) count++; 
            else count=1;
        }
        if(count > max){
            max = count;
            res = [];
            res.push(root.val);
        }else if(count == max) res.push(root.val);
        prenode = root;
        helper(root.right);
    }
    helper(root);
    return res;
};
// @lc code=end

