/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 19/19 cases passed (116 ms)
// Your runtime beats 81.89 % of javascript submissions
// Your memory usage beats 58.04 % of javascript submissions (49.6 MB)
var productExceptSelf = function(nums) {
  let res = [1]
  let r = 1
  for(let i=1, l=nums.length; i<l; i++) {
    res[i] = nums[i-1]*res[i-1]
  }
  for(let i=nums.length-1; i>=0; i--) {
    res[i] = r*res[i]
    r=r*nums[i]
  }
  return res
};
// @lc code=end

