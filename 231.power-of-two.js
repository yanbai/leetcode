/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function(n) {
//   if(n===0)
//     return false
//   let temp = n&(n-1)
//   if(temp === 0)
//     return true
//   return false
// };

// 抄答案
function isPowerOfTwo(n) {
  return n>0 && !(n&(n-1))
}

// let res = isPowerOfTwo(-2147483648)
// @lc code=end

