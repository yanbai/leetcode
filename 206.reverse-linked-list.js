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
// runtime unstable, from 13% ~ 65%
// var reverseList = function(head) {
//     let current = head
//     let temp = null
//     let reversed = null
//     while(current !== null) {
//         temp = current
//         current = current.next
//         temp.next = reversed
//         reversed = temp
//     }
//     return reversed
// };

var reverseList = function(head) {
    if (!head || !head.next) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList(next);
    head.next = null; // 裁减 head
    next.next = head; // 尾接
    return reverseHead;
};

// @lc code=end

