/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// method 数学归纳

// var generateParenthesis = function(n) {
    
// };


// method recusion: o(2n) 傻递归 后过滤出有效值
// list all possibility
// 8/8 cases passed (120 ms)
// Your runtime beats 5.95 % of javascript submissions
// Your memory usage beats 5.18 % of javascript submissions (53.6 MB)

// step 1. list when n = 2

// function generateParenthesis(n) {
//   let res = []
//   let p_1=''
//   let p_2=''
//   let possibilities = ['(', ')']
//   for(let x of possibilities){
//     p_1=x
//     for(let y of possibilities) {
//       p_2=y
//       res.push(p_1+p_2)
//     }
//   }
//   return res
// }
// let res = generateParenthesis(1)

// step 2. list all possibilities
// function generateParenthesis(n) {
//   let res = []
//   let possibilities = ['(', ')']
//   _gen(1, 2*n, '')

//   function _gen(currentlevel, totalLevel, inner_res) {
//     if(currentlevel===totalLevel+1) {
//       res.push(inner_res)
//       return
//     }
//     for(let x of possibilities){
//       _gen(currentlevel+1, totalLevel, inner_res+x)
//     }
//   }

//   return res
// }

// let res = generateParenthesis(1)

// step 3. filter valid result (alias brute force)
// function generateParenthesis(n) {
//   let res = []
//   let possibilities = ['(', ')']
//   _gen(1, 2*n, '')

//   function _gen(currentlevel, totalLevel, inner_res) {
//     if(currentlevel===totalLevel+1) {
//       res.push(inner_res)
//       return
//     }
//     for(let x of possibilities){
//       _gen(currentlevel+1, totalLevel, inner_res+x)
//     }
//   }

//   function validateParenthesis(str) {
//     let stack = []
//     let map = {
//       ')': '('
//     }
//     for(let s of str) {
//       if(s==='(') {
//         stack.push(s)
//       } else {
//         let pop = stack.pop()
//         if(pop === map[s]) {
//           continue
//         } else {
//           return false
//         }
//       }
//     }
//     if(stack.length) {
//       return false 
//     } else {
//       return true
//     }
//   }

//   res = res.filter(v=>validateParenthesis(v))
//   return res
// }
// let res = generateParenthesis(3)

// method improve from 2nd method
// 剪枝
// 局部不合法，不再递归
// left: used, right: used
// 
// 8/8 cases passed (84 ms)
// Your runtime beats 35.15 % of javascript submissions
// Your memory usage beats 16.96 % of javascript submissions (40.6 MB)

// function generateParenthesis(n) {
//   let res = []
//   let possibilities = ['(', ')']
  
//   _gen(1, 2*n, '', 0, 0)

//   function _gen(currentlevel, totalLevel, inner_res, left_count, right_count) {
//     if(currentlevel===totalLevel+1) {
//       res.push(inner_res)
//       return
//     }
//     for(let x of possibilities){
//       if(x === '(' && left_count<n)
//         _gen(currentlevel+1, totalLevel, inner_res+x, left_count+1, right_count)
//       if(x === ')' && right_count<n && left_count>right_count)
//         _gen(currentlevel+1, totalLevel, inner_res+x, left_count, right_count+1)
//     }
//   }

//   return res
// }
// console.time('dfs')
// let res = generateParenthesis(12)
// console.timeEnd('dfs')

// try to improve
// 8/8 cases passed (72 ms)
// Your runtime beats 94.83 % of javascript submissions
// Your memory usage beats 52.2 % of javascript submissions (39.1 MB)
function generateParenthesis(n) {
  let res = []
  let possibilities = ['(', ')']
  
  _gen(1, 2*n, '', 0, 0)

  function _gen(currentlevel, totalLevel, inner_res, left_count, right_count) {
    // if(currentlevel===totalLevel+1) {
    //   res.push(inner_res)
    //   return
    // }
    if(left_count===n && right_count ===n) {
      res.push(inner_res)
      return
    }
    if(left_count<n)
      _gen(currentlevel+1, totalLevel, inner_res+'(', left_count+1, right_count)
    if(right_count<n && left_count>right_count)
      _gen(currentlevel+1, totalLevel, inner_res+')', left_count, right_count+1)
  }
  return res
}
// console.time('dfs')
// let res = generateParenthesis(12)
// console.timeEnd('dfs')

// 抄答案
// 8/8 cases passed (76 ms)
// Your runtime beats 83.17 % of javascript submissions
// Your memory usage beats 33.33 % of javascript submissions (39.3 MB)
// function generateParenthesis(n) {
//   let outer_res = []
//   function _gen(left, right, n, res) {
//     if(left===n && right ===n) {
//       outer_res.push(res)
//       return
//     }
//     if(left < n) 
//       _gen(left+1, right, n, res+"(")
//     if((left > right) && (right<n))
//       _gen(left, right+1, n, res+")")
//   }
//   _gen(0,0,n,'')
//   return outer_res
// }

// let res = generateParenthesis(20)

// @lc code=end

