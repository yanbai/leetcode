/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// refer to daily temperatures
// m increasing stack

// Your runtime beats 5.5 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (43.5 MB)
// function nextGreaterElements(arr) {
//   let res = new Array(arr.length).fill(-1)
//   for(let i=0;i<2*arr.length; i++) {
//     for(let j=i; j<2*arr.length; j++) {
//       if(arr[j%arr.length]>arr[i%arr.length]) {
//         res[i%arr.length] = arr[j%arr.length]
//         break
//       }
//     }
//   }
//   return res
// }

// Your runtime beats 71 % of javascript submissions
// Your memory usage beats 24 % of javascript submissions (45.6 MB)
function nextGreaterElements(arr) {
  const [res, stack] = [new Array(arr.length).fill(-1), []]
  for(let i=0;i<2*arr.length; i++) {
    while(stack.length && arr[i%arr.length] > stack[stack.length-1][0]) {
      const [val, index] = stack.pop()
      res[index] = arr[i%arr.length]
    }
    if(i<arr.length) {
      stack.push([arr[i], i])
    }
  }
  return res
}
// @lc code=end

console.log(nextGreaterElements([1,2,1]))
