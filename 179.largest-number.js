/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let temp = nums.sort(compare)
  return temp.join('').replace(/^0+$/, '0')
};

function compare(a, b) {
  if(''+a+b > ''+b+a)
    return -1
  if(''+a+b < ''+b+a)
    return 1
  return 0
}

// let res = largestNumber([3,30,34,5,9])
// let res = compare(3, 30)

// @lc code=end

