/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 90/90 cases passed (72 ms)
// Your runtime beats 71.95 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (37.8 MB)
var countBinarySubstrings = function(s) {
    let current = 1
    let prev = 0
    let res = 0
    for(let i=1; i<s.length; i++) {
        if (s[i]===s[i-1]) {
            current++
        } else {
            prev = current
            current = 1
        }
        if(current<=prev) {
            res++
        }
    }
    return res
};

// var countBinarySubstrings = function(s) {
//     let groupIndex = 0
//     let groupCount = 1
//     let group = []
//     let res = 0
//     for(let i=0; i<s.length-1; i++) {
//         if (s[i] === s[i+1]) {
//             groupCount++
//         } else {
//             groupIndex ++
//             groupCount = 1
//         }
//         group[groupIndex] = groupCount
//     }
//     console.log(group)
//     for(let j=1; j<group.length; j++) {
//         res += Math.min(group[j], group[j-1])
//     }
//     return res
// }
// @lc code=end

