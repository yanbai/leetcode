/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1)
        return l2
    if(!l2)
        return l1
    let small = l1.val < l2.val ? l1 : l2
    // let big = small === l1 ? l2 : l1
    if(small === l1) {
        small.next = mergeTwoLists(l1.next, l2)
    } else {
        small.next = mergeTwoLists(l1, l2.next)
    }
    return small
}
// @lc code=end

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// let a = new ListNode(1)
// let b = new ListNode(2)
// let c = new ListNode(4)

// let d = new ListNode(1)
// let e = new ListNode(3)
// let f = new ListNode(4)
// a.next = b
// b.next = c

// d.next = e
// e.next = f

// mergeTwoLists(a, d)
