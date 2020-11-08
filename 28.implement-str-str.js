/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle)
    // function start(s) {
    //     let state = findA
    //     for(let c of s) {
    //         state = state(c)
    //     }
    //     return state === end
    // }
    
    // function end(c) {
    //     return end
    // }

    // start(haystack)
    if(needle === "")
        return 0
    if(needle !== "" && haystack === "")
        return -1
    if(haystack.length < needle.length)
        return -1
    if(haystack === needle)
        return 0
    if(haystack.length === needle.length) {
        if(haystack === needle)
            return 0
        return -1
    }

    let dp = [...new Array(haystack.length)].map(v => new Array(needle.length).fill(0))
    for(let i=0,l=haystack.length; i<l; i++) {
        for(let j=0, m=needle.length; j<m; j++) {
            if(haystack[i] === needle[j] && (i<1 || j<1)) {
                dp[i][j] = 1
            } else if(haystack[i] === needle[j] && dp[i-1][j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            if(dp[i][j] === needle.length) 
                return i-j
        }
    }
    return -1
};

let res = strStr('aaa', 'a')
// console.log(res)
// @lc code=end
