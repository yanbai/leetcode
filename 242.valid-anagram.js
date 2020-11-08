/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false
    let map = {}
    for(let i=0,l=s.length; i<l; i++) {
        let s_c = s[i]
        let t_c = t[i]
        if(!map[s_c])  {
            map[s_c] = 1
        } else {
            map[s_c] ++
        }
        if(!map[t_c]) {
            map[t_c] = -1
        } else {
            map[t_c] --
        }
    }
    for(k in map){
        if(map[k] !== 0){
            return false
        }
    }
    return true
}
isAnagram("anagram", "nagaram")
// @lc code=end

