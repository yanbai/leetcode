/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 11510/11510 cases passed (236 ms)
// Your runtime beats 32.42 % of javascript submissions
// Your memory usage beats 20.89 % of javascript submissions (49.3 MB)
var isPalindrome = function(x) {
  if(String(x).length === 1)
    return true
  if(x<0 || x%10===0)
    return false
  let l = x
  let r = 0
  while (l>r) {
    let temp = l%10
    l = Math.floor(l/10)
    r*=10
    r+=temp
  }
  return l===r||l===Math.floor(r/10)
};
let res = isPalindrome(0)
// @lc code=end