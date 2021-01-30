/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   if(amount === 0)
//     return 0
//   let tempArr = [].map(i=>new Array(2))
//   for(let i=0, l=coins.length; i<l; i++) {
//     if(amount > coins[i]) {
//       tempArr[i][0] = -1
//     } else {
//       tempArr[i][0] = Math.floor(amount/coins[i])
//       tempArr[i][1] = amount%coins[i]
//     }
//   }
//   for(let i=0, l=tempArr.length; i<l; i++) {
//     if(tempArr[i][0] === 1)
//       return 1
//   }
// };

// dp
// 182/182 cases passed (120 ms)
// Your runtime beats 72.2 % of javascript submissions
// Your memory usage beats 90.36 % of javascript submissions (42.5 MB)
function coinChange(coins, amount) {
  let dp = new Array(amount+1).fill(amount+1)
  dp[0] = 0
  for(let i=1; i<amount+1; i++) {
    for(let j=0, l=coins.length; j<l; j++) {
      if(i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1)
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
}

// let res = coinChange([1,2,5], 11)
// @lc code=end

