/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 34/34 cases passed (68 ms)
// Your runtime beats 96.65 % of javascript submissions
// Your memory usage beats 12.97 % of javascript submissions (38.7 MB)
// function decodeString(s) {
//   let [stack, res, count] = [[], "", 0]
//   for(let c of s) {
//     if(c === '[') {
//       stack.push([count, res])
//       res = ''
//       count = 0
//     } else if(c === ']') {
//       let [curCount, curRes] = stack.pop()
//       res = curRes + res.repeat(curCount)
//     } else if(/\d/.test(c)) {
//       count = count*10+parseInt(c, 10)
//     } else {
//       res+=c
//     }
//   }
//   return res
// }

// [: count push stack
// num: set count
// str: set temp
// ]: generate: count*str


// num: set count
// str: set temp
// [: push count, reset count
// ]: temp = res+top*temp

function decodeString(str) {
  let [count, temp, stack, res] = [0, '', [], '']
  for(let s of str) {
    if(/\d/.test(s)) {
      count = count*10+parseInt(s, 10)
    } else if(/[a-zA-Z]/.test(s)) {
      temp+=s
    } else if(s === '[') {
      stack.push(count)
      count = 0
      res = ''
    } else {
      const top = stack.pop()
      res+=temp.repeat(top)
    }
  }
  return res
}

// function decodeString(str) {
//   let [stack, count, temp] = [[], 0, '']
//   for(let s of str) {
//     if(s === '[') {
//       stack.push([count, temp])
//       count = 0
//       temp = ''
//     } else if(/\d/.test(s)) {
//       count=count*10+parseInt(s, 10)
//     } else if(/[a-z]/.test(s)) {
//       temp+=s
//     } else if(s === ']') {
//       const top = stack.pop()
//       temp = top[1] + temp.repeat(top[0])
//     }
//   }
//   return temp
// }
// [[3, ''], [2, '']]
// [[3, ''], [2, 'a']]
let res = decodeString('3[a]2[bc]')
// let res = decodeString('3[a2[c]]')

// @lc code=end

