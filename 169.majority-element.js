/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// method: map, o(n)
// 46/46 cases passed (88 ms)
// Your runtime beats 73.63 % of javascript submissions
// Your memory usage beats 13.77 % of javascript submissions (42.6 MB)
var majorityElement = function(nums) {
  let count = {}  
  for(let x of nums) {
    if(x in count) {
      count[x]++
    } else {
      count[x] = 1
    }
  }
  for(let c in count) {
    if(count[c] > nums.length/2) {
      return c
    }
  }
};

// method: sort, o(nlogn)

// method: divide and conquer, o(nlogn)
// 2020/11/20 divide&conquer can't make it
// function majorityElement(nums) {
//   function helper(nums, l, r) {
//     let m = l + (r - l) / 2 
//     let lm = majority(nums, l, m)
//     let rm = majority(nums, m + 1, r)

//     if(lm === rm)
//       return lm
//     return 
//   }
// }
// let res = majorityElement([2,2,1,1,1,2,2])
// @lc code=end


