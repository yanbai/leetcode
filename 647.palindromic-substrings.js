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
// var countSubstrings = function(s) {
//     let dp = [...new Array(s.length+1)].map(v=>new Array(s.length+1).fill(0))
//     let res = 0
//     for(let i=s.length-1; i>=0; i--) {
//         for(let j=i, m=s.length; j<m; j++) {
//             dp[i][j] = (s[i] === s[j]) && ((j-i <= 2) || dp[i+1][j-1])
//             if(dp[i][j])
//                 res ++
//         }
//     }
//     return res
// }

function countSubstrings(s) {
    let res=0
    for(let i=0,l=s.length; i<l; i++) {
        for(let j=0; j<2; j++) {
            let left = i
            let right = i+j
            while(s[left] === s[right] && left >= 0 && right <=s.length) {
                res++
                left --
                right ++
            }
        }
    }
    return res
}
// let res = countSubstrings('abc')
// console.log(res)
// @lc code=end
