/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 33/33 cases passed (188 ms)
// Your runtime beats 24.33 % of javascript submissions
// Your memory usage beats 53.01 % of javascript submissions (44.3 MB)

// var permuteUnique = function(nums) {
//   let totalLevel = nums.length
//   let res = new Set

//   _dfs(0, '', nums)
//   function _dfs(currentLevel, innerRes, nums) {
//     if(
//       currentLevel === totalLevel
//     ) {
//       res.add(innerRes)
//     }
//     for(let i=0, l=nums.length; i<l; i++) {
//       let current = nums[i]
//       nums.splice(i, 1)
//       _dfs(currentLevel+1, innerRes+','+current, nums)
//       nums.splice(i, 0, current)
//     }
//   }
//   return [...res].map(i=>i.slice(1).split(','))
// };

// 33/33 cases passed (116 ms)
// Your runtime beats 35.93 % of javascript submissions
// Your memory usage beats 35.64 % of javascript submissions (45.2 MB)
// var permuteUnique = function(nums) {
//   let totalLevel = nums.length
//   let res = new Set
//   let argsCombinations = new Set

//   _dfs(0, '', nums)
//   function _dfs(currentLevel, innerRes, arr) {
//     if(
//       currentLevel === totalLevel
//     ) {
//       res.add(innerRes)
//     }
//     for(let i=0, l=arr.length; i<l; i++) {
//       let current = arr[i]
//       arr.splice(i, 1)
//       if(!argsCombinations.has(`${currentLevel+1}, ${innerRes+','+current}, ${arr}`)) {
//         _dfs(currentLevel+1, innerRes+','+current, arr)
//         argsCombinations.add(`${currentLevel+1}, ${innerRes+','+current}, ${arr}`)
//       }
//       arr.splice(i, 0, current)
//     }
//   }
//   return [...res].map(i=>i.slice(1).split(','))
// };

// Your runtime beats 78.21 % of javascript submissions
// Your memory usage beats 94.63 % of javascript submissions (41 MB)
// function permuteUnique(nums) {
//   const res = []
//   const visited = new Array(nums.length).fill(false)
//   function dfs(level, path) {
//     if(level === nums.length) {
//       res.push(path.slice())
//       return
//     }

//     for(let i=0; i<nums.length; i++) {
//       if(visited[i] || (
//         i>0 && nums[i] === nums[i-1] && !visited[i-1]
//       ))
//         continue
//       path.push(nums[i])
//       visited[i] = true
//       dfs(level+1, path)
//       path.pop()
//       visited[i] = false
//     }
//   }
//   nums.sort((a,b)=>a-b)
//   dfs(0, [])
//   return res
// }

function permuteUnique(nums) {
  const [res, visited] = [new Set, {}]
  function dfs(path) {
    if(path.length === nums.length) {
      res.add(path.slice().join(','))
      return
    }
    for(let i=0; i<nums.length; i++) {
      if(visited[i])
        continue
      visited[i] = true
      path.push(nums[i])
      dfs(path, visited)
      visited[i] = false
      path.pop()
    }
  }
  // nums = nums.sort((a, b) => a-b)
  dfs([])
  return [...res].map(i => i.split(',').map(i => parseInt(i, 10)))
}

let res = permuteUnique([1,1,2])
// @lc code=end
