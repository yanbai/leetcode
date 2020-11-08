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
    if(!head || !head.next)
        return null
    let pre = new ListNode(0)
    pre.next = head
    let index = 0
    let slow = pre
    let fast = pre
    while(fast) {
        fast = fast.next
        if(index > n)
            slow = slow.next
        index++
    }
    slow.next = slow.next.next
    return pre.next
}

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// // [4,1,8,4,5]
// let a_1 = new ListNode(1)
// let b_1 = new ListNode(2)
// let c_1 = new ListNode(3)
// let d_1 = new ListNode(4)
// let e_1 = new ListNode(5)

// a_1.next = b_1
// b_1.next = c_1
// // c_1.next = d_1
// // d_1.next = e_1

// let res = removeNthFromEnd(a_1, 3)

// @lc code=end

