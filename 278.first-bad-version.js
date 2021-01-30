/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 22/22 cases passed (76 ms)
// Your runtime beats 70 % of javascript submissions
// Your memory usage beats 53.53 % of javascript submissions (38.3 MB)
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if(n === 1)
      return 1
    if(isBadVersion(1))
      return 1
    let l = 1
    let r = n
    let half = Math.ceil((l+r)/2)
    while (r>=l) {
      if(isBadVersion(half) && !isBadVersion(half-1)) {
        return half
      } else if (isBadVersion(half) && isBadVersion(half-1)) {
        r = half
      } else if (!isBadVersion(half) && !isBadVersion(half-1)) {
        l = half
      }
      half = Math.ceil((l+r)/2)
    }
  };
};

// var solution = function(isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function(n) {
//     if(n === 1)
//       return 1
//     if(isBadVersion(1))
//       return 1
//     let l=1
//     let r=n
//     let half
//     while (r>=l) {
//       half = Math.ceil((l+r)/2)
//       if(isBadVersion(half) && !isBadVersion(half-1)) {
//         return half
//       } else if (isBadVersion(half) && isBadVersion(half-1)) {
//         r = half
//       } else if (!isBadVersion(half) && !isBadVersion(half-1)) {
//         l = half
//       }
//     }
//   };
// };
// function isBadVersion(n) {
//   if(n<2)
//     return 0
//   return 1
// }

function solution(isBadVersion) {
  return function(n) {
    if(isBadVersion(1) || n === 1)
      return 1
    let [l, r] = [1, n]
    while(l<r) {
      const half = l+Math.floor((r-l)/2)
      if(isBadVersion(half) && !isBadVersion(half-1)) 
        return half
      if(!isBadVersion(half) && !isBadVersion(half-1)) {
        l = half
      } else if(isBadVersion(half) && isBadVersion(half-1)) {
        r = half
      }
    }
  }
}
// let res = solution(isBadVersion)(2)
// @lc code=end

