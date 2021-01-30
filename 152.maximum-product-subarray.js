/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 186/187 cases passed (N/A)
// FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
// var maxProduct = function(nums) {
//   if(nums.length === 1)
//     return nums[0]
//   let dp = new Array(nums.length).fill(0).map(i=>new Array(nums.length).fill(0))
//   let res = 0
//   for(let i=nums.length-1; i>=0; i--) {
//     for(let j=i; j<nums.length; j++) {
//       if(i===j) {
//         dp[i][j] = nums[i]
//       } else {
//         dp[i][j] = dp[i][j-1]*nums[j]
//       }
//       if(dp[i][j]>res)
//         res = dp[i][j]
//     }
//   }
//   return res
// };

// dfs 
// Time Limit Exceeded
// 182/187 cases passed (N/A)
// function maxProduct(nums) {
//   if(nums.length === 1)
//     return nums[0]
//   let res = nums[0]
//   dfs(0, nums[0], nums)

//   function dfs(currentLevel, innerRes, arr) {
//     if(currentLevel >=arr.length-1) {
//       res = Math.max(res, innerRes)
//       return
//     }
//     res = Math.max(res, innerRes)
//     dfs(currentLevel+1, innerRes*arr[currentLevel+1], arr)
//     dfs(currentLevel+1, arr[currentLevel+1], arr)
//   }
//   return res
// }

// dp
// 187/187 cases passed (96 ms)
// Your runtime beats 22.05 % of javascript submissions
// Your memory usage beats 10.73 % of javascript submissions (41 MB)
function maxProduct(nums) {
  let dp = new Array(nums.length).fill(0).map(i=>[nums[i], nums[i]])
  let res = nums[0]

  for(let i=1, l=nums.length; i<l; i++) {
    if(nums[i]<0) {
      dp[i][0] = Math.min(nums[i]*dp[i-1][1], nums[i])
      dp[i][1] = Math.max(nums[i]*dp[i-1][0], nums[i])
    } else {
      dp[i][0] = Math.min(nums[i]*dp[i-1][0], nums[i])
      dp[i][1] = Math.max(nums[i]*dp[i-1][1], nums[i])
    }
  }

  for(let i=0, l=dp.length; i<l; i++) {
    res = Math.max(dp[i][1], res)
  }
  return res
}
let res = maxProduct([2,3,-2,4])

// dp[i][j] = dp[i][j-1] * nums[i][j]
// TLE 186/187 cases passed
// function maxProduct(nums) {
//   let dp = new Array(nums.length).fill(0).map(i => new Array(nums.length))
//   let max = nums[0]
//   for(let i=0, l=nums.length; i<l; i++) {
//     for(let j=i, m=nums.length; j<m; j++) {
//       if(j===i) {
//         dp[i][j] = nums[i]
//       } else {
//         dp[i][j] = dp[i][j-1] * nums[j]
//       }
//       max = Math.max(max, dp[i][j])
//     }
//   }
//   return max
// }

// correct way，存两种状态的dp，只要o(n)
// dp[i][0] 以i为终点的最小值
// dp[i][1] 以i为终点的最大值

// @lc code=end

