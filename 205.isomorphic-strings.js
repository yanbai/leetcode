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
// 32/32 cases passed (260 ms)
// Your runtime beats 98.96 % of javascript submissions
// Your memory usage beats 87.66 % of javascript submissions (41 MB)
function isIsomorphic(s, t) {
    if(s.length !== t.length)
        return false
    let mapA = {}
    let mapB = {}
    for(let i=0, l=s.length; i<l; i++) {
        let si = s[i]
        let ti = t[i]
        if(!mapA[si]) {
            mapA[si] = ti
        } else {
            if(mapA[si] !== ti)
                return false
        }
        if(!mapB[ti]) {
            mapB[ti] = si
        } else {
            if(mapB[ti] !== si)
                return false
        }
    }
    return true
}
// let res = isIsomorphic('egg', 'add')
// @lc code=end

