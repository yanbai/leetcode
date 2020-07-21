/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// runtime 20, memory 20
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let res = 0
    for(let i of nums) {
        if (i === 1) {
            count++
            res = count>res ? count : res
        } else {
            count = 0
        }
    }
    return res
};

// @lc code=end

