/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// runtime 17~80, memory 80
var matrixReshape = function(nums, r, c) {
    let res = new Array(r)
    let newRow = 0
    res[newRow] = new Array
    let oldColumnNumber = nums[0].length
    let count
    for(let i=0,l=nums.length; i<l; i++) {
        for(let j=0, m=nums[i].length; j<m; j++) {
            count = (i)*(oldColumnNumber) + (j+1)
            if(count%c !== 0) {
                res[newRow].push(nums[i][j])
            } else {
                res[newRow].push(nums[i][j])
                if(newRow<(r-1)) {
                    newRow++
                    res[newRow] = new Array
                }
            }
        }
    }
    if(count!==r*c) 
        return nums
    return res
};

// a = matrixReshape([[1,2],[3,4]], 4, 1)
// console.log(a)
// @lc code=end

