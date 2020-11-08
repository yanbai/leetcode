/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {}
    let res = 0
    for(let i=0, l=s.length; i<l; i++) {
        let ch = s[i]
        if(!map[ch]) {
            map[ch] = 1
        } else {
            map[ch] ++
        }
    }
    for(key in map) {
        if(map[key] > 1) {
            res += Math.floor(map[key]/2)
        }
    }
    res = res*2
    if(res < s.length)
        res ++

    return res
};
// longestPalindrome('abccccdd')
// @lc code=end

