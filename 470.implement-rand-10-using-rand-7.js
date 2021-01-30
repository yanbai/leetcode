/*
 * @lc app=leetcode id=470 lang=javascript
 *
 * [470] Implement Rand10() Using Rand7()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let result = rand7()
  while(result > 5) {
    result = rand7()
  }
  let temp = rand7()
  while(temp === 7)
    temp = rand7()
  return temp > 3 ? result : result+5
};
// @lc code=end

