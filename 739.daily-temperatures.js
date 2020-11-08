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
// 1. brute force check
// 37/37 cases passed (848 ms)
// Your runtime beats 27.06 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (41.9 MB)
var dailyTemperatures = function(arr) {
    let res = new Array(arr.length).fill(0)
    for (let i=0, l=arr.length; i<l; i++) {
        for (let j=i, m=arr.length; j<m; j++) {
            if(arr[j] > arr[i]) {
                res[i] = j-i
                break
            }

        }
    }
    return res
};

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

// console.time('testForEach')
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// console.timeEnd('testForEach')

// @lc code=end
