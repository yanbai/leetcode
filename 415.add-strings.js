/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// Your runtime beats 92.87 % of javascript submissions
// Your memory usage beats 40.47 % of javascript submissions (40.9 MB)
var addStrings = function(num1, num2) {
  let num1_reverse = num1.split('').reverse()
  let num2_reverse = num2.split('').reverse()
  
  let carry = 0
  let res = ''
  let i = 0

  while(num1[i] || num2[i] || carry) {
    let n_1 = parseInt(num1_reverse[i], 10) || 0
    let n_2 = parseInt(num2_reverse[i], 10) || 0
    res = ((n_1 + n_2 + carry)%10) + res
    carry = Math.floor((n_1+n_2 + carry)/10)
    i++
  }

  return res
};

// @lc code=end

