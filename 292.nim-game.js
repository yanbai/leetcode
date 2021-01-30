/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // let dp = []
  // for(let i=1; i<=n; i++) {
  //   if(i===1) {
  //     dp[i] = true
  //   } else if(i === 2) {
  //     dp[i] = true
  //   } else if(i === 3) {
  //     dp[i] = true
  //   } else if(i === 4) {
  //     dp[i] = false
  //   } else {
  //     dp[i] = dp[i-4]
  //   }
  // }
  // return dp[n]

  return n%4 !== 0
};
// @lc code=end

