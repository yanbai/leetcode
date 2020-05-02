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
// 11509/11509 cases passed (472 ms)
// Your runtime beats 5.28 % of javascript submissions
// Your memory usage beats 5.17 % of javascript submissions (84.7 MB)
var isPalindrome = function(x) {
    if (x===0) return true
    if (x<0 || x%10 === 0) return false

    let right = 0

    while (x > right) {
        right = right * 10 + x % 10
        x = Math.floor(x/10)
        console.log(x)
        console.log(right)
    }
    return x === right || x === Math.floor(right/10)
};

// @lc code=end