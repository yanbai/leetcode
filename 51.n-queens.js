/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
// method from yanbai
// 9/9 cases passed (480 ms)
// Your runtime beats 5.31 % of javascript submissions
// Your memory usage beats 10.2 % of javascript submissions (46 MB)
// var solveNQueens = function(n) {
//   const totalLevel = n
//   let outerRes = []
//   console.time('n queens DFS time')
//   _dfs(0, '', '')

//   function _dfs(currentLevel, innerRes, disableRules) {
//     if(currentLevel===totalLevel) {
//       _genRawOutput(innerRes)
//       return
//     }
//     // process every level logic
//     // currentLevel is row, x is col
//     outer: for(let x=0; x<n; x++) {
//       // parse disableRules
//       let _disableRules = disableRules.split('#').filter(v=>v)
//       for(let i=0, l=_disableRules.length; i<l; i++) {
//         let _disableRule = eval(_disableRules[i])
//         if(_disableRule(currentLevel, x))
//           continue outer
//       }
//       // place queen
//       let _innerRes = innerRes?(innerRes+`,${x}`):`${x}`
//       // produce new disable rule
//       let _newRule = `#(r, c) => {return c === ${x}}#(r,c) => {return r+c === ${currentLevel+x}}#(r,c) => {return r-c === ${currentLevel-x}}`
      
//       _dfs(currentLevel+1, _innerRes, disableRules+_newRule)
//     }
//   }
  
//   function _genRawOutput(rawRes) {
//     outerRes.push(rawRes)
//   }

//   function _parseOutput(total, rawOutput) {
//     // rawRes is like: ['1,3,0,2', '2,0,3,1']
//     if(!rawOutput.length)
//       return []
//     let parsedRes = rawOutput.map(rawSingle=> {
//       return rawSingle.split(',').map(v => {
//         return _gen(total, v)
//       })
//     })
//     return parsedRes
//   }

//   function _gen(total, num) {
//     let res = new Array(total).fill('.')
//     if(!num)
//       return res.join('')
//     res[parseInt(num)] = 'Q'
//     return res.join('')
//   }
//   console.timeEnd('n queens DFS time')
  
//   console.time('parse result')
//   let final = _parseOutput(n, outerRes)
//   console.timeEnd('parse result')
//   return final
// };
// console.time('whole programe')
// let res = solveNQueens(5)
// console.timeEnd('whole programe')
// console.log('end')

// 9/9 cases passed (92 ms)
// Your runtime beats 64.49 % of javascript submissions
// Your memory usage beats 23.19 % of javascript submissions (43.3 MB)
function solveNQueens(n) {
  let outRes = []
  function _dfs(currentLevel, columnOccupied, pieOccupied, naOccupied, innerRes) {
    if(currentLevel===n) {
      outRes.push(innerRes)
      return
    }
    for(let i=0; i<n; i++) {
      if(columnOccupied.includes(i))
        continue
      if(naOccupied.includes(currentLevel-i))
        continue
      if(pieOccupied.includes(currentLevel+i))
        continue
      let _tempInnerRes = innerRes+i
      let _tempColumnOccupied = columnOccupied.concat(i)
      let _tempPieOccupied = pieOccupied.concat(currentLevel+i)
      let _tempNaOccupied = naOccupied.concat(currentLevel-i)

      _dfs(currentLevel+1, _tempColumnOccupied, _tempPieOccupied, _tempNaOccupied, _tempInnerRes)
    }
  }
  _dfs(0, [], [], [], '')
  return outRes.map(item => parseToQ(item))
}

function parseToQ(str) {
  let l = str.length
  let arr = str.split('').map(item => parseSingleToQ(item, l))
  return arr
}
function parseSingleToQ(num, total) {
  num = parseInt(num, 10)
  let res = new Array(total).fill('.')
  res[num] = 'Q'
  return res.join('')
}
// let res = parseToQ('0312')
let res = solveNQueens(4)
// @lc code=end

