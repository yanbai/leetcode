/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 276/276 cases passed (92 ms)
// Your runtime beats 39.63 % of javascript submissions
// Your memory usage beats 67.35 % of javascript submissions (39.1 MB)
var minCostClimbingStairs = function(cost) {
  // let dp = []
  let prev_1 = 0
  let prev_2 = 0
  let res = 0
  for(let i=1, l=cost.length+1; i<l; i++) {
    if(i === 1) {
      prev_2 = 0
    } else if(i === 2) {
      prev_1 = Math.min(cost[0], cost[1])
    } else {
      res = Math.min(prev_1+cost[i-1], prev_2+cost[i-2])
      prev_2 = prev_1
      prev_1 = res
    }
  }
  return res
};
let res = minCostClimbingStairs([1,1,1,0])
// @lc code=end
