/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// runtime unstable, from 13% ~ 45%
var reverseList = function(head) {
    let current = head
    let temp = null
    let reversed = null
    while(current !== null) {
        temp = current
        current = current.next
        temp.next = reversed
        reversed = temp
    }
    return reversed
};
// @lc code=end

