/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
// 130/130 cases passed (84 ms)
// Your runtime beats 52.92 % of javascript submissions
// Your memory usage beats 50 % of javascript submissions (63.2 MB)
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let dp = [...new Array(s.length + 1)].map(()=>new Array(s.length+1).fill(false))
    let result = false
    for(let i = s.length-1; i>=0; i--) {
        for(let j=i; j<s.length; j++) {
            dp[i][j] = (s[i]===s[j]) && (j-i <= 2 || dp[i+1][j-1])
            if(dp[i][j]) result++
        }
    }
    return result
};
// @lc code=end
