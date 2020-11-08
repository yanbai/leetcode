/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */


var removeNthFromEnd = function(head, n) {
    let preHead = new ListNode(0, head)
    let slow = preHead
    let fast = preHead
    while(n--) {
        fast = fast.next
    }
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return preHead.next
}

// @lc code=end

