/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
// 25/25 cases passed (80 ms)
// Your runtime beats 70.89 % of javascript submissions
// Your memory usage beats 7.6 % of javascript submissions (42.1 MB)
// var diffWaysToCompute = function(input) {
//   // 如果只有数字 直接返回
//   if(/^\d*$/.test(input)) {
//     return [parseInt(input)]
//   }
//   let res = []
//   for(let i=0, l=input.length; i<l; i++) {
//     if(['+', '-', '*'].includes(input[i])) {
//       let left = diffWaysToCompute(input.slice(0, i))
//       let right = diffWaysToCompute(input.slice(i+1))

//       for(let l of left) {
//         for(let r of right) {
//           if(input[i] === '-') {
//             res.push(l-r)
//           } else if(input[i] === '+') {
//             res.push(l+r)
//           } else if(input[i] === '*') {
//             res.push(l*r)
//           }
//         }
//       }
//     }
//   }
//   return res
// };

const reg = /[\+\-\*]/

function diffWaysToCompute(str) {
  const res = []
  if(/^\d+$/.test(str))
    return [parseInt(str, 10)]
  
  for(let i=1, l=str.length; i<l; i++) {
    if(reg.test(str[i])) {
      const [l, r] = [
        diffWaysToCompute(str.slice(0, i)),
        diffWaysToCompute(str.slice(i+1))
      ]

      for(let _l of l) {
        for(let _r of r) {
          switch (str[i]) {
            case '+':
              res.push(_l+_r)
              break
            case '-':
              res.push(_l-_r)
              break
            case '*':
              res.push(_l*_r)
              break
          }
        }
      }
    }
  }
  return [...res]
}
let res = diffWaysToCompute('11')

// @lc code=end
