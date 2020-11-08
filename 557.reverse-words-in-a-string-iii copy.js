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

// function swapStr(s, start, end) {
//     return s.slice(0, start)
//         + s[end]
//         + s.slice(start+1, end)
//         + s[start]
//         + s.slice(end+1, s.length)
// }

// function swapWord(s) {
//     let res = ''
//     for(let i=0, l=s.length; i<l; i++) {
//         res = s[i] + res
//     }
//     return res
// }

// runtime 30
// memory 8
// function reverseWords(s) {
//     let start = 0
//     let end = 0
//     for(let i=0, l=s.length; i<l; i++) {
//         if(s[i] === ' ' || i === s.length-1) {
//             end = i===s.length-1 ? i+1 : i
//             let currentWord = s.slice(start, end)
//             s = s.slice(0, start) + 
//                 currentWord.split('').reverse().join('') + 
//                 s.slice(end, s.length)
//             start = end + 1
//         }
//     }
//     return s
// }

// runtime 30
// memory 30
function reverseWords(s) {
    return s.split(' ').map(v=>v.split('').reverse().join('')).join(' ')
}

// @lc code=end

