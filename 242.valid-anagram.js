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
// 34/34 cases passed (72 ms)
// Your runtime beats 71.69 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (35 MB)
var isAnagram = function(s, t) {
    let obj_s = {}
    let obj_t = {}

    Array.prototype.forEach.call(s, (sletter)=>{
        sletter in obj_s ? obj_s[sletter]++ : obj_s[sletter]=1
    })
    Array.prototype.forEach.call(t, (tletter)=>{
        tletter in obj_t ? obj_t[tletter]++ : obj_t[tletter]=1
    })
    return(_.isEqual(obj_s, obj_t))
};

// 34/34 cases passed (96 ms)
// runtime beats 42.15 %
// memory usage beats 30.61 % (38.3 MB)
// var isAnagram = function(s, t) {
//     let s_dup = s.split('').sort().join('')
//     let t_dup = t.split('').sort().join('')
//     return s_dup === t_dup
// }
// @lc code=end

