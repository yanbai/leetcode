/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 54/54 cases passed (144 ms)
// Your runtime beats 53.8 % of javascript submissions
// Your memory usage beats 10 % of javascript submissions (41 MB)
function lengthOfLIS(nums) {
  if(!nums.length)
    return 0
  let dp = []
  // let res = 0
  for (let i=0, l=nums.length; i<l; i++) {
    dp[i] = 1
    for(let j=0; j<i; j++) {
      if(nums[i] > nums[j])
        dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    // res = Math
  }
  return dp.sort((a, b) => b-a)[0]
}
// @lc code=end

