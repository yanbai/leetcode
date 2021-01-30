/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// Your runtime beats 44.93 % of javascript submissions
// Your memory usage beats 16.14 % of javascript submissions (57.9 MB)
// function countSubstrings(str) {
//   const dp = new Array(str.length+1).fill(false).map(i=>new Array(str.length+1).fill(false))
//   let count = 0
//   for(let i=str.length-1; i>=0; i--) {
//     for(let j=i; j< str.length; j++) {
//       if(i === j) {
//         dp[i][j] = true
//       } else {
//         dp[i][j] = (str[i] === str[j]) && (j-i<2 || dp[i+1][j-1])
//       }
//       if(dp[i][j])
//         count++
//     }
//   }
//   return count
// }

// Your runtime beats 69.72 % of javascript submissions
// Your memory usage beats 89.18 % of javascript submissions (38.9 MB)
function countSubstrings(str) {
  let [count] = [0]
  for(let i=0; i<str.length; i++) {
    for(let j=0; j<2; j++) {
      let [l, r] = [i, i+j]
      while(str[l] === str[r] && l>=0 && r<str.length) {
        count++
        l--
        r++
      }
    }
  }
  return count
}

// dp[i][j] 代表i,j palindome
// dp[i][j] = (str[i] === str[j] && dp[i+1][j-1]) || i===j

let res = countSubstrings('abc')
// console.log(res)
// @lc code=end
