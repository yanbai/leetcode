/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 304/304 cases passed (80 ms)
// Your runtime beats 78.27 % of javascript submissions
// Your memory usage beats 63.96 % of javascript submissions (38.9 MB)
// we have two ways, recursion and iterate
// this is recursion (by yanbai)
// var myPow = function(x, n) {
//   if(n===0)
//     return 1
//   if(n===1)
//     return x
//   if(n===-1)
//     return 1/x
  
//   let prevRes = myPow(x, Math.floor(n/2))
    
//   // 判断误差
//   if(Math.abs(prevRes)<0.0001)
//     return 0
//   if(prevRes === 1)
//     return 1

//   if(n/2 === Math.floor(n/2)){
//     // n is even
//     return prevRes*prevRes
//   } else {
//     // n is odd number
//     return prevRes*prevRes*x
//   }
// };

// Your runtime beats 99.56 % of javascript submissions
// Your memory usage beats 35.06 % of javascript submissions (39 MB)
// function myPow(x, n) {
//   if(x === 1 || x === 0)
//     return x
//   if(n === 0)
//     return 1
//   if(n === 1)
//       return x
//   if(n<0)
//     return 1/myPow(x, -n)
//   let half = myPow(x, Math.floor(n/2))
//   if(n&1) {
//     return half*half*x
//   } else {
//     return half*half
//   }
// }

// 304/304 cases passed (84 ms)
// Your runtime beats 58.11 % of javascript submissions
// Your memory usage beats 63.45 % of javascript submissions (38.8 MB)
// function myPow(x, n) {
//   if(n<0) {
//     x=1/x
//     n=-n
//   }
//   const boundary = 1e-5
//   let res = 1
//   while(n) {
//     if(Math.abs(x) < boundary)
//       return 0
//     if(x===1 || x === 0)
//       break
//     if(n&1)
//       res*=x
//     x *= x
//     n >>= 1
//   }
//   return res
// }


// x^n/2^2
// Your runtime beats 60.3 % of javascript submissions
// Your memory usage beats 93.67 % of javascript submissions (38.5 MB)
function myPow(x, n) {
  if(x===1 || x===0)
    return x
  if(n===0)
    return 1
  if(n===1)
    return x
  if(n<0)
    return 1/myPow(x, -n)
  
  let subQuestion = myPow(x, Math.floor(n/2))
  if(Math.abs(subQuestion - 0) < 1E-5)
    return 0
  let res
  if(n&1) {
    res = subQuestion*subQuestion*x
  } else {
    res = subQuestion*subQuestion
  }
  return res
}
// @lc code=end

