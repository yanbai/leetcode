/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */


// dfs can win over let res = removeKdigits('1432219', 3)
// but TLS

// function removeKdigits(num, k) {
//   if(num.length === k)
//     return '0'
//   let res = []
//   function _dfs(currentLevel, total, innerRes) {
//     if(currentLevel === total+1) {
//       res.push(innerRes)
//       return
//     }
//     for(let i=0, l=innerRes.length; i<l; i++) {
//       _dfs(currentLevel+1, total, innerRes.slice(0, i) + innerRes.slice(i+1))
//     }
//   }
//   _dfs(1, k, num)
//   return res
// }
// Your runtime beats 62.64 % of javascript submissions
// Your memory usage beats 15.52 % of javascript submissions (41.5 MB)
function removeKdigits(num, k) {
  if(num.length === k)
    return '0'
  let stack = []
  for(let i=0;i<num.length;i++) {
    while(stack.length && k && num[i]<stack[stack.length-1]) {
      const val = stack.pop()
      k--
    }
    stack.push(num[i])
  }
  if(k) {
    stack = stack.slice(0, -k)
  }
  num = stack.join('').replace(/^0+/, '')
  return (/^0+$/.test(num) || num === '') ? '0' : num
}

let res = removeKdigits('1432219', 3)

// @lc code=end

