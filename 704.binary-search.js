/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//   let l = 0
//   let r = nums.length-1
//   let half
//   while(l<=r) {
//     half = Math.floor((l+r)/2)
//     if(nums[half] === target) {
//       return half
//     } else if (nums[half] <= target) {
//       l = half+1
//     } else {
//       r = half-1
//     }
//   }
//   return -1
// };

function search(nums, target) {
  if(nums[0] === target)
    return 0
  if(nums[nums.length-1] === target)
    return nums.length-1
  if(nums.length == 1 && nums[0] !== target )
    return -1
  
  let [l, r] = [0, nums.length-1]
  while(r>l) {
    const half = l+Math.floor((r-l)/2)
    if(nums[half] === target)
      return half
    if(nums[half]<target) {
      l = half
    } else {
      r = half
    }
  }
  return -1
}

let res = search([-1,0,3,5,9,12], 2)
// @lc code=end

