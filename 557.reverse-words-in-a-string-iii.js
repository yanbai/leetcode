/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

function reverseWords(s) {
    let start = 0
    let end = 0
    for(let i=0, l=s.length; i<l; i++) {
        let char = s[i]
        if(char === ' ' || i === s.length-1) {
            end = i === s.length-1 ? i+1 : i

            s = s.slice(0, start) + 
                s.slice(start, end).split('').reverse().join('') +
                s.slice(end, s.length)
            
            start = end+1
        }
    }
    return s
}
// let res = reverseWords("Let's take LeetCode contest")
// @lc code=end

