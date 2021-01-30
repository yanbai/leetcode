/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 200/200 cases passed (84 ms)
// Your runtime beats 54.05 % of javascript submissions
// Your memory usage beats 85.11 % of javascript submissions (39.1 MB)
var maxProfit = function(prices) {
  let res = 0
  for(let i=0, l=prices.length; i<l-1; i++) {
    if(prices[i]<prices[i+1]) {
      res+=(prices[i+1]-prices[i])
    }
  }
  return res
};
// @lc code=end

