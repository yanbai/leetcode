/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// tle 52/60 cases passed
// function maxSlidingWindow(num, k) {
// 	const [res, sliding] = [[], []]
// 	for(let i=0; i<num.length; i++) {
// 		sliding.push(num[i])
// 		if(i >= k)
// 			sliding.shift()
// 		if(i >= k-1)
// 			res.push(Math.max(...sliding))
// 	}
// 	return res
// }

// Your runtime beats 40.21 % of javascript submissions
// Your memory usage beats 23.26 % of javascript submissions (69.5 MB)
function maxSlidingWindow(num, k) {
	const [res, sliding] = [[], []]
	for(let i=0; i<num.length; i++) {
		if(i >= k && (i - sliding[0]>=k))
			sliding.shift()
		while(sliding.length && (num[i] > num[sliding[sliding.length-1]]))
			sliding.pop()
		sliding.push(i)
		if(i >= k-1)
			res.push(num[sliding[0]])
	}
	return res
}

let res = maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)

// @lc code=end

