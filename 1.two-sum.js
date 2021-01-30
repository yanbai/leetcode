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

// Your runtime beats 31.18 % of javascript submissions
// Your memory usage beats 85.83 % of javascript submissions (38.6 MB)
// function twoSum(nums, target) {
//   for(let i=0; i<nums.length; i++) {
//     for(let j=i+1; j<nums.length; j++) {
//       if(nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// Your runtime beats 84.83 % of javascript submissions
// Your memory usage beats 29.74 % of javascript submissions (39 MB)
// new Map().has
// Object.keys(hash).includes
// key in

function twoSum(nums, target) {
  const map = {}
  for(let i=0; i<nums.length; i++) {
    const current = nums[i]
    if((target-current) in map)
      return [map[target-current], i]
    map[current] = i
  }
}
let res = twoSum([2,7,11,15], 9)
// @lc code=end

