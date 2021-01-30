/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// Your runtime beats 58.25 % of javascript submissions
// Your memory usage beats 5.59 % of javascript submissions (40.8 MB)
function mySqrt(x) {
  if(x === 0 || x === 1)
    return x
  if(x < 0)
    throw new Error('do not input negative number')
  let l = 0
  let r = x
  const errorBoundary = 1e-3
  while(r > l) {
    let half = l+(r-l)/2
    if(Math.abs(half*half - x) < errorBoundary) {
      return Math.floor(half)
    } else if(half*half < x) {
      l = half
    } else {
      r = half
    }
  }
}

// let res = mySqrt(8)
// @lc code=end

