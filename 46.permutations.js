/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Your runtime beats 68.28 % of javascript submissions
// Your memory usage beats 50.4 % of javascript submissions (41.7 MB)
// var permute = function(nums) {
//   if(nums.length === 1)
//     return [nums]
//   let res = []
//   function _dfs(currentLevel, innerRes, candidate, total) {
//     if(currentLevel === total) {
//       innerRes+=(','+candidate[0])
//       res.push(innerRes)
//       return
//     }
//     for(let i=0, l=candidate.length; i<l; i++) {
//       let current = candidate[i]
//       candidate.splice(i, 1)
//       _dfs(currentLevel+1, `${innerRes ? (innerRes + ',' + current) : current}`, candidate, total)
//       candidate.splice(i, 0, current)
//     }
//   }
//   _dfs(1, '', nums, nums.length)
//   return res.map(i => i.split(','))
// };

// Your runtime beats 6.79 % of javascript submissions
// Your memory usage beats 85.84 % of javascript submissions (41.3 MB)
// visited = set()
// function dfs(node, visited) {
//   visited.add(node)
//   for(let nextNode of node.children()) {
//     if(!visited[nextNode])
//       dfs(nextNode, visited)
//   }
// }
// function permute(nums) {
//   let [res, visited] = [[], {}]
//   function dfs(path) {
//     if(path.length === nums.length) {
//       res.push(path.slice())
//       return
//     }
//     for(let n of nums) {
//       if(visited[n])
//         continue
//       visited[n] = true
//       path.push(n)
//       dfs(path)
//       visited[n] = false
//       path.pop()
//     }
//   }
//   dfs([])
//   return res
// }
function permute(nums) {
  const [res, visited] = [[], {}]
  function recurse(path) {
    if(path.length === nums.length) {
      res.push(path.slice())
      return
    }
    for(let i=0; i<nums.length; i++) {
      if(visited[nums[i]])
        continue
      visited[nums[i]] = true
      path.push(nums[i])
      recurse(path)
      visited[nums[i]] = false
      path.pop()
    }
  }
  recurse([])
  return res
}

// let res = permute([1,2,3])
// @lc code=end

