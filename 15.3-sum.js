/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// brute force
// 2020/11/18
// function threeSum(nums) {
//   const l=nums.length
//   let res = new Set()
//   let _nums = nums.sort()
//   for(let i=0; i<l; i++) {
//     for(let m=i+1; m<l; m++) {
//       for(let n=m+1; n<l; n++) {
//         if(_nums[n]+_nums[m]+_nums[i] === 0)
//           res.add(JSON.stringify([
//             _nums[i],
//             _nums[m],
//             _nums[n]
//           ])) 
//       }
//     }
//   }
//   return [...res].map(v=>JSON.parse(v))
// }
// let res = threeSum([-1,0,1,2,-1,-4])

// bruce force TLE
// function threeSum(nums) {
//   const res = []
//   nums.sort((a, b) => a-b)
//   for(let i=0; i<nums.length; i++) {
//     if(i>0&&nums[i] === nums[i-1])
//       continue
//     const mapB = {}
//     for(let j=i+1; j<nums.length; j++) {
//       if(nums[j] in mapB)
//         continue
//       mapB[nums[j]] = true
//       const mapC = {}
//       for(let m=j+1; m<nums.length; m++) {
//         if(nums[m] in mapC)
//           continue
//         mapC[nums[m]] = true
//         if(nums[i] + nums[j] + nums[m] === 0)
//           res.push([nums[i], nums[j], nums[m]])
//       }
//     }
//   }
//   return res
// }

// hash
// Your runtime beats 5 % of javascript submissions
// Your memory usage beats 5.1 % of javascript submissions (110.4 MB)
// function threeSum(nums) {
//   const res = new Set
//   nums.sort((a,b) => a-b)
//   for(let i=0; i<nums.length; i++) {
//     const map = {}
//     if(i>0 && nums[i] === nums[i-1])
//       continue
//     for(let j=i+1; j<nums.length; j++) {
//       const current = nums[i] + nums[j]
//       if((-nums[j]) in map)
//         res.add(`${map[-nums[j]][0]},${map[-nums[j]][1]},${nums[j]}`)
//       map[current] = [nums[i], nums[j]]
//     }
//   }
//   return [...res].map(i=>i.split(',').map(i=>parseInt(i, 10)))
// }


// 318/318 cases passed (384 ms)
// Your runtime beats 17.39 % of javascript submissions
// Your memory usage beats 14.3 % of javascript submissions (51.6 MB)
function threeSum(nums) {
  nums = nums.sort((a, b) => a-b)
  const res = new Set
  for(let i=0; i<nums.length; i++) {
    let [l, r] = [i+1, nums.length-1]
    while(l<r) {
      const sum = nums[i] + nums[l] + nums[r]
      if(sum === 0) {
        res.add(`${nums[i]},${nums[l]},${nums[r]}`)
        l++
        r--
      }else if(sum > 0) {
        r--
      } else if(sum<0) {
        l++
      }
    }
  }
  return [...res].map(i=>i.split(',').map(i=>parseInt(i)))
}


let res = threeSum([-1,0,1,2,-1,-4])
// [-4, -1, -1, 0, 1, 2]
// @lc code=end

