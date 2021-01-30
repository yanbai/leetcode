/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// Your runtime beats 97.73 % of javascript submissions
// Your memory usage beats 90.68 % of javascript submissions (43.5 MB)
function combine(n, k) {
  const res = []
  function dfs(path, level) {
    if(path.length === k) {
      res.push(path.slice())
      return
    }
    for(let i=level+1; i<=n; i++) {
      path.push(i)
      dfs(path, i)
      path.pop()
    }
  }
  dfs([], 0)
  return res
}

let res = combine(4, 2)
// @lc code=end

