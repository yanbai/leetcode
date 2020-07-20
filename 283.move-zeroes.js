/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// runtime 74, memory 14
var moveZeroes = function(nums) {
    let temp = []
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] === 0) {
            let zero = nums.splice(i, 1)
            nums.push(zero[0])
        }
    }
};
// @lc code=end

