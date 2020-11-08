/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (38.06%)
 * Likes:    4569
 * Dislikes: 207
 * Total Accepted:    936K
 * Total Submissions: 2.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 76/76 cases passed (60 ms)
// Your runtime beats 36.7 % of javascript submissions
// Your memory usage beats 13.33 % of javascript submissions (35.3 MB)
var isValid = function(s) {
    let mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let left_regexp = /[\(\[\{]/
    let right_regexp = /[\)\]\}]/

    let left = []
    // let right = []
    for(c of s) {
        if(left_regexp.test(c)) {
            left.push(c)
        } else if(right_regexp.test(c)) {
            if(left[left.length-1] === mapping[c]) {
                left.pop()
            } else {
                return false
            }
        }
    }
    return left.length === 0
};
// @lc code=end

