/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 507/507 cases passed (116 ms)
// Your runtime beats 20.1 % of javascript submissions
// Your memory usage beats 23.94 % of javascript submissions (43.9 MB)
var isValidSudoku = function(board) {
  let rowNums = new Array(9).fill(0).map(i=>new Set)
  let colNums = new Array(9).fill(0).map(i=>new Set)
  let cube = new Array(9).fill(0).map(i=>new Set)
  for(let i=0, l=board.length; i<l; i++) {
    for(let j=0, m=board[i].length; j<m; j++) {
      if(board[i][j]==='.')
        continue
      if(rowNums[i].has(board[i][j]))
        return false
      rowNums[i].add(board[i][j])
      if(colNums[j].has(board[i][j]))
        return false
      colNums[j].add(board[i][j])
      if(cube[Math.floor(i/3)+Math.floor(j/3)+Math.floor(i/3)*2].has(board[i][j]))
        return false
      cube[Math.floor(i/3)+Math.floor(j/3)+Math.floor(i/3)*2].add(board[i][j])
    }
  }
  return true
};
// @lc code=end

