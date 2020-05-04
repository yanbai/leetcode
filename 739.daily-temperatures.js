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
console.time('testForEach')
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.timeEnd('testForEach')

let arr = [3, 4, 2, 6, 4, 5, 2, 3]
let res = []

for (let i = 0; i < arr.length; i++) {
    while (res.length && res[res.length - 1] < arr[i]) {
        res.pop()
    }
    res.push(arr[i])
}
console.log(res)

// @lc code=end
