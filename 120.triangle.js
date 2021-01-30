/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// method DP
// 43/43 cases passed (84 ms)
// Your runtime beats 49.1 % of javascript submissions
// Your memory usage beats 18.56 % of javascript submissions (40.5 MB)
// var minimumTotal = function(triangle) {
//   let dp = new Array(triangle.length).fill(0).map(
//     item=>new Array().fill(0)
//   )
//   for(let i=triangle.length-1; i>=0; i--) {
//     for(let j=0, l=triangle[i].length; j<l; j++) {
//       if(i===triangle.length-1) {
//         dp[i][j] = triangle[i][j]
//       } else {
//         dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
//       }
//     }
//   }
//   return dp[0][0]
// };

// method DP
// 状态压缩后
// 43/43 cases passed (84 ms)
// Your runtime beats 47.12 % of javascript submissions
// Your memory usage beats 52.88 % of javascript submissions (39.2 MB)
// function minimumTotal(triangle) {
//   let dp_current = new Array(triangle.length).fill(0)
//   let dp_prev = new Array(triangle.length).fill(0)
//   for(let i=triangle.length-1; i>=0; i--) {
//     for(let j=0; j<=i; j++) {
//       if(i === triangle.length-1) {
//         dp_current[j] = triangle[i][j]
//       } else {
//         dp_prev[j] = dp_current[j]
//         dp_current[j] = Math.min(dp_prev[j], dp_current[j+1]) + triangle[i][j]
//       }
//     }
//   }
//   return dp_current[0]
// }

// method DFS
// Time Limit Exceeded
// 42/43 cases passed (N/A)
// function minimumTotal(triangle) {
//   let min = +Infinity
//   function _dfs(currentLevel, innerRes, previousIndex) {
//     if(currentLevel === triangle.length) {
//       if(innerRes<min)
//         min = innerRes
//       return
//     }
//     for(let i=0, l=triangle[currentLevel].length; i<l; i++) {
//       if(i<previousIndex || i>previousIndex+1)
//         continue
//       _dfs(currentLevel+1, innerRes+triangle[currentLevel][i], i)
//     }
//   }
//   _dfs(0, 0, 0)
//   return min
// }

// DFS 抄答案 TLE 42/43 cases passed
// function minimumTotal(triangle) {

//   function dfs(arr, i, j) {
//     if(i === arr.length)
//       return 0
//     return Math.min(
//       dfs(arr, i+1, j),
//       dfs(arr, i+1, j+1)
//     ) + arr[i][j]
//   }

//   return dfs(triangle, 0, 0)
// }

// DFS + memorize fail 0/43 cases passed
// function minimumTotal(triangle) {
//   let memo = new Array(triangle.length).fill(0).map(i=>new Array(triangle.length))
//   return dfs(triangle, 0, 0) 
//   function dfs(arr, i, j) {
//     if(i === arr.length)
//       return 0
//     if(memo[i][j] !== null)
//       return memo[i][j]
//     return memo[i][j] = Math.min(
//       dfs(arr, i+1, j),
//       dfs(arr, i+1, j+1)
//     ) + arr[i][j]
//   }
// }

// dp 空间优化
function minimumTotal(triangle) {
  const dp = triangle[triangle.length-1]
  for(let i=triangle.length-2; i>=0; i--) {
    let temp = triangle[i]
    for(let j=0; j<temp.length; j++) {
      dp[j] = Math.min(dp[j+1] + triangle[i][j], dp[j] + triangle[i][j])
    }
  }
  return dp[0]
}

// let testData = [
//   [2],
//  [3,4],
// [6,5,7],
// [4,1,8,3]
// ]
// let res = minimumTotal(testData)
// @lc code=end

