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
var countBinarySubstrings = function(s) {
    let currentConsecutive = 1
    let prevConsecutive = 0
    let res = 0
    for(let i=1, l=s.length; i<l; i++) {
        if(s[i] === s[i-1]) {
            currentConsecutive ++
        } else {
            prevConsecutive = currentConsecutive
            currentConsecutive = 1
        }
        if(currentConsecutive <= prevConsecutive)
            res ++
    }
    return res
};
// let res = countBinarySubstrings("10101")

// @lc code=end

