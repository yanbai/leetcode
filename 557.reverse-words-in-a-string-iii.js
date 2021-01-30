/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// Your runtime beats 10.08 % of javascript submissions
// Your memory usage beats 9.92 % of javascript submissions (46.2 MB)
function reverseWords(s) {
    let start = 0
    let end = 0
    for(let i=0, l=s.length; i<l; i++) {
        let char = s[i]
        if(char === ' ' || i === s.length-1) {
            end = i === s.length-1 ? i+1 : i

            s = s.slice(0, start) + 
                s.slice(start, end).split('').reverse().join('') +
                s.slice(end, s.length)
            
            start = end+1
        }
    }
    return s
}


// Your runtime beats 80.48 % of javascript submissions
// Your memory usage beats 92.48 % of javascript submissions (44.7 MB)
// function reverseWords(str) {
//   return str.split(' ').map(i=>i.split('').reverse().join('')).join(' ')
// }

// Your runtime beats 6.08 % of javascript submissions
// Your memory usage beats 5.28 % of javascript submissions (47.6 MB)
// function swap(str) {
//   // 'abcde'
//   let [left, right] = [0, str.length-1]
//   while(left<right) {
//     str = str.slice(0, left) + str[right] + str.slice(left+1, right) + str[left] + str.slice(right+1)
//     left++
//     right--
//   }
//   return str
// }

// function reverseWords(str) {
//   let [start, end, temp] = [0, 0, '']
//   for(let i=0; i<str.length; i++) {
//     // start: word start, end: next blank
//     if(str[i] === ' ' || i===str.length-1) {
//       end = (i===str.length-1) ? i+1 : i
//       // swap temp
//       temp = swap(str.slice(start, end))
//       str = str.slice(0, start) + temp + str.slice(end)
//       start = i+1
//     }
//   }
//   return str
// }
let res = reverseWords("Let's take LeetCode contest")
// @lc code=end

