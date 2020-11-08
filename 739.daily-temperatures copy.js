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
var dailyTemperatures = function(T) {
    // let matrics=[]
    let res = new Array(T.length).fill(0)
    // matrics = [...new Array(T.length)].map(v=>new Array(T.length).fill(0))
    for(let i=0, l=T.length; i<l; i++) {
        for(let j=i, m=T.length; j<m; j++) {
            if(T[j] > T[i]) {
                // matrics[i][j] = 1
                res[i] = j-i
                break
            }
        }
    }
    // console.log(matrics)
    return res
};

// 2. monotonous increasing stack
// https://www.jianshu.com/p/302647198b89
// https://leetcode-cn.com/problems/daily-temperatures/solution/cheng-xu-yuan-de-zi-wo-xiu-yang-739-daily-temperat/
// related: 907. Sum of Subarray Minimums
// 975. Odd Even Jump
// 37/37 cases passed (152 ms)
// Your runtime beats 62.59 % of javascript submissions
// Your memory usage beats 11.11 % of javascript submissions (48.4 MB)
var dailyTemperatures = function(T) {
    let { length } = T
    let stack = []
    let res = new Array(length).fill(0)
    for(let i=0, l=length; i<l; i++) {
        if(!stack.length) {
            stack.push([i, T[i]])
        } else {
            while(!!stack.length && T[i] > stack[stack.length-1][1]) {
                let popupItem = stack.pop()
                let index = popupItem[0]
                let value = i-index
                res[index] = value
            }
            stack.push([i, T[i]])
        }
    }
    return res
}

// console.time('testForEach')
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// console.timeEnd('testForEach')

// @lc code=end
