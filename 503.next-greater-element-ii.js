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
// 224/224 cases passed (112 ms)
// Your runtime beats 60.75 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (42.5 MB)
var nextGreaterElements = function(nums) {
    let { length } = nums
    let stack = []
    let res = new Array(length).fill(-1)
    for(let i=0; i<length*2; i++) {
        let _i = i%length
        if (!stack.length) {
            stack.push([_i, nums[_i]])
        } else {
            while(!!stack.length && nums[_i] > stack[stack.length-1][1]) {
                let popItem = stack.pop()
                let index = popItem[0]
                let value = nums[_i]
                res[index] = value
            }
            if(i<length) {
                stack.push([_i, nums[_i]])
            }
        }
    }
    return res
};
// @lc code=end

console.log(nextGreaterElements([1,2,1]))
