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

// var isAnagram = function(s, t) {
//     let obj_s = {}
//     let obj_t = {}

//     Array.prototype.forEach.call(s, (sletter)=>{
//         sletter in obj_s ? obj_s[sletter]++ : obj_s[sletter]=1
//     })
//     Array.prototype.forEach.call(t, (tletter)=>{
//         tletter in obj_t ? obj_t[tletter]++ : obj_t[tletter]=1
//     })
//     return(_.isEqual(obj_s, obj_t))
// };

// 34/34 cases passed (60 ms)
// Your runtime beats 96.6 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (35.2 MB)

var isAnagram = function(s, t) {
    let obj = {}
    if (s.length !== t.length) return false
    Array.prototype.forEach.call(s, (s_item, s_index)=> {
        s_item in obj ? obj[s_item]++ : obj[s_item]=1
        t[s_index] in obj ? obj[t[s_index]]-- : obj[t[s_index]]=-1
    })
    for(let i in obj) {
        if(obj[i] !== 0) return false
    }
    return true
}

// 34/34 cases passed (168 ms)
// Your runtime beats 6.8 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (34.9 MB)

// var isAnagram = function(s, t) {
//     let obj = {}
//     let result = true
//     if (s.length !== t.length) return false
//     Array.prototype.forEach.call(s, (s_item, s_index)=> {
//         s_item in obj ? obj[s_item]++ : obj[s_item]=1
//     })

//     Array.prototype.forEach.call(t, (t_item)=> {
//         if (!(t_item in obj)) {
//             result = false
//         }
//         if (t_item in obj) {
//             obj[t_item]--
//             if(obj[t_item] < 0) {
//                 result = false
//             }
//         }
//     })
//     return result
// }

// 34/34 cases passed (96 ms)
// runtime beats 42.15 %
// memory usage beats 30.61 % (38.3 MB)
// sorting approach

// var isAnagram = function(s, t) {
//     let s_dup = s.split('').sort().join('')
//     let t_dup = t.split('').sort().join('')
//     return s_dup === t_dup
// }
// @lc code=end

