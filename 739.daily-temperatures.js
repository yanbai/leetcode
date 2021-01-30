/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
// Your runtime beats 27.65 % of javascript submissions
// Your memory usage beats 95.82 % of javascript submissions (47.7 MB)
// function dailyTemperatures(arr) {
//   let res = new Array(arr.length).fill(0)
//   for(let i=0;i<arr.length;i++) {
//     for(let j=i;j<arr.length;j++) {
//       if(arr[j]>arr[i]) {
//         res[i] = j-i
//         break
//       }
//     }
//   }
//   return res
// }

// const dailyTemperatures = arr => {
//     let stack = []
//     let res = new Array(arr.length).fill(0)
//     for(let i=0, l=arr.length; i<l; i++) {
//         while(stack.length && arr[i] > stack[stack.length-1].value) {
//             let item = stack.pop()
//             res[item.index] = i - item.index
//         }
//         stack.push({
//             index: i,
//             value: arr[i]
//         })
//     }
//     return res
// }


// Your runtime beats 71.22 % of javascript submissions
// Your memory usage beats 6.91 % of javascript submissions (54 MB)
function dailyTemperatures(arr) {
  const [res, stack] = [new Array(arr.length).fill(0), []]
  for(let i=0; i<arr.length; i++) {
    if(!stack.length || arr[i] < stack[stack.length-1][0]) {
      stack.push([arr[i], i])
    } else {
      while(stack.length && arr[i] > stack[stack.length-1][0]) {
        const [val, index] = stack.pop()
        res[index] = i-index
      }
      stack.push([arr[i], i])
    }
  }
  return res
}

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// @lc code=end
