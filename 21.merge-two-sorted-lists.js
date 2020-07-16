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
// runtime 20~40
// var mergeTwoLists = function(l1, l2) {
//     if(l1 === null && l2 === null) return null
//     if(l1 === null && l2 !== null) return l2
//     if(l1 !== null && l2 === null) return l1
//     let small = l1.val < l2.val ? l1 : l2
//     let another = small === l1 ? l2 : l1
//     let current = small
//     let start = small
//     let temp = null
//     while (current.next!==null) {
//         if(small.next.val < another.val) {
//             small = small.next
//         } else {
//             temp = small
//             small = another
//             another = temp.next
//         }
//         current.next = small
//         current = small
//     }
//     current.next = another
//     return start
// };
// runtime 7~60, memory 20
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2
    if(l2 === null) return l1
    if(l1.val<l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}
// @lc code=end

