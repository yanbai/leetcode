/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 81/81 cases passed (76 ms)
// Your runtime beats 79.48 % of javascript submissions
// Your memory usage beats 16.59 % of javascript submissions (38.7 MB)
var compareVersion = function(version1, version2) {
  let arr_1 = version1.split('.')
  let arr_2 = version2.split('.')
  let l1 = arr_1.length
  let l2 = arr_2.length
  let l = l1>l2 ? l1 : l2
  let res = 0
  
  for(let i=0; i<l; i++) {
    if(!arr_1[i])
      arr_1[i] = 0
    if(!arr_2[i])
      arr_2[i] = 0
    
    if(compareSingle(arr_1[i], arr_2[i])) {
      res = compareSingle(arr_1[i], arr_2[i])
      break
    }
  }
  return res
};

function compareSingle(str_1, str_2) {
  let v1 = parseInt(str_1)
  let v2 = parseInt(str_2)
  if(v1 === v2)
    return 0
  if(v1>v2)
    return 1
  if(v1<v2)
    return -1
}

// let res = compareVersion('0.1', '1.1')

// 81/81 cases passed (76 ms)
// Your runtime beats 79.48 % of javascript submissions
// Your memory usage beats 40.61 % of javascript submissions (38.5 MB)
var compareVersion = function(version1, version2) {
  const v1 = version1.split('.')
  const v1_length = v1.length
  const v2 = version2.split('.')
  const v2_length = v2.length
  const max = Math.max(v1_length,v2_length)
  for (let i=0; i< max; i++) {
      const n1 = Number(v1[i]||0)
      const n2 = Number(v2[i]||0)
      if (n1<n2) {
          return -1
      } else if (n1>n2) {
          return 1
      } else {
          if (i===max-1) {
              return 0
          }
      }
  }
};

// @lc code=end

