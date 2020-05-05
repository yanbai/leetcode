/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 29/29 cases passed (56 ms)
// Your runtime beats 81.31 % of javascript submissions
// Your memory usage beats 11.16 % of javascript submissions (36.3 MB)
var twoSum = function(nums, target) {
    let hash = new Map()
    let res = []
    for (let i=0,l=nums.length; i<l; i++) {
        if (hash.has(target-nums[i])) {
            let j = hash.get(target-nums[i])
            res = [i, j]
        } else {
            hash.set(nums[i], i)
        }
    }
    return res
};

// var twoSum = function(nums, target) {
//     let hash = {}
//     let res = []
//     for (let i=0,l=nums.length; i<l; i++) {
//         if (Object.keys(hash).includes(target-nums[i])) {
//             let j = hash[target-nums[i]]
//             res = [i, j]
//         } else {
//             hash[nums[i]] = i
//         }
//     }
//     return res
// };

// @lc code=end

