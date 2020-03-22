/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 30/30 cases passed (260 ms)
// Your runtime beats 5.43 % of javascript submissions
// Your memory usage beats 11.76 % of javascript submissions (41 MB)
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    return oneWayIsmorphic(s, t) && oneWayIsmorphic(t, s)
};
function oneWayIsmorphic(s, t) {
    let ob = {}
    for (let i=0, l=s.length; i<l; i++ ) {
        if(!Object.keys(ob).includes(s[i])) {
            ob[s[i]] = t[i]
        } else {
            if(ob[s[i]] !== t[i]) return false
        }
    }
    return true
}
// @lc code=end

