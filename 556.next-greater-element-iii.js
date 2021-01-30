/*
 * @lc app=leetcode id=556 lang=javascript
 *
 * [556] Next Greater Element III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  // brute force
  let res = []
  function _dfs(currentLevel, innerRes, candidate, totalLevel) {
    if(currentLevel === totalLevel) {
      innerRes += candidate[0]
      res.push(innerRes)
      return
    }
    for (let i=0, l=candidate.length; i<l; i++) {
      let current = candidate[i]
      candidate.splice(i, 1)
      _dfs(currentLevel+1, innerRes+current, candidate, totalLevel)
      candidate.splice(i, 0, current)
    }
  }
  _dfs(1, '', String(n).split(''), String(n).length)
  
  res = res.map(i => parseInt(i, 10)).sort((a,b)=>a-b)

  for(let _n of res) {
    if(_n>n)
      return _n
  }
  return -1
};
// let res = nextGreaterElement(21)
// console.log(nextGreaterElement(21))
// @lc code=end

