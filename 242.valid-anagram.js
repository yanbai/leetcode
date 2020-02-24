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
    let arr_1 = {}
    let arr_2 = {}

    Array.prototype.forEach.call(s, (sletter)=>{
        sletter in arr_1 ? arr_1[sletter]++ : arr_1[sletter]=1
    })
    Array.prototype.forEach.call(t, (tletter)=>{
        tletter in arr_2 ? arr_2[tletter]++ : arr_2[tletter]=1
    })
    console.log(_.isEqual(arr_1, arr_2))
    return(_.isEqual(arr_1, arr_2))
};
// @lc code=end

