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
var isPalindrome = function(x) {
    if(x === 0)
        return true
    if(x<0)
        return false
    if(x%10 === 0)
        return false
    
    let left = x
    let right = 0
    while(left > right) {
        let endNumber = left % 10
        left = Math.floor(left / 10)
        right = right * 10 + endNumber
    }
    return left === right || Math.floor(right/10) === left
};
let res = isPalindrome(10)
// @lc code=end