/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// Your runtime beats 99.05 % of javascript submissions
// Your memory usage beats 55.46 % of javascript submissions (40.3 MB)
function reverseWords(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}

// 55/57 cases passed
// "EPY2giL" can not pass
// function reverseWords(str) {
//   let [start, end] = [0, 0]
//   for(let i=0; i<str.length; i++) {
//     // get start end: start = blank start, end = wordend
//     if(str[i] === ' ' || i===str.length-1) {
//       end = (i===str.length-1) ? i+1 : i
//       str = str.slice(start, end).trim() + ' ' + str.slice(0, start).trim() + ' ' + str.slice(end).trim()
//       start = end
//     }
//   }
//   return str.trim()
// }
let res = reverseWords('the sky is blue')

// @lc code=end


