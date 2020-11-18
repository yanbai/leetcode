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
var maxSlidingWindow = function(nums, k) {
	let res = []
	let queue = new Array()
	for(let i=0, l=nums.length; i<l; i++) {
		let n = nums[i]
		// remove first element if it is outside the window
		if(queue[0] === i-k) {
			queue.shift()
		}

		// check if the new item is bigger than bottom item
		while(
			queue.length &&
			nums[queue[queue.length-1]] <= n
		) {
			queue.pop()
		}
		queue.push(i)
		// collect result
		if(i >= k-1)
			res.push(nums[queue[0]])
	}
	return res
};
// let res = maxSlidingWindow([1,3,1,2,0,5], 3)
// @lc code=end

