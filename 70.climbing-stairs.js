/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    let res
    if(n===1) {
        res = 1
    } else if(n===2) {
        res = 2
    } else {
        res = climbStairs(n-1) + climbStairs(n-2)
    }
    return res
}
// var climbStairs = function(n) {
//     const dp = [];
//     dp[0] = 1;
//     dp[1] = 1;
//     for(let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// }
// @lc code=end

