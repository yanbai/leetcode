/*
 * @lc app=leetcode id=409 lang=java
 *
 * [409] Longest Palindrome
 */

// 95/95 cases passed (1 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 6.67 % of java submissions (37.6 MB)

// @lc code=start
class Solution {
    public int longestPalindrome(String s) {
        int[] cnts = new int[256];
        int res = 0;
        for(char c:s.toCharArray()) {
            cnts[c]++;
        }
        for(int cnt:cnts) {
            res+=(cnt/2)*2;
        }
        if(res<s.length()) {
            res++;
        }
        return res;
    }
}
// @lc code=end

