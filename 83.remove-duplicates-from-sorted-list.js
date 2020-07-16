/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
// runtime 10, memory 10
// var deleteDuplicates = function(head) {
//     let prev = head
//     let current = head
//     while(current!==null) {
//         if(current.val === prev.val) {
//             prev.next = current.next
//         } else {
//             prev = current
//         }
//         current = current.next
//     }
//     return head
// };

//runtime 45, memory 45 
var deleteDuplicates = function(node) {
    if(node === null || node.next === null) return node
    node.next = deleteDuplicates(node.next)
    node.next = node.val === node.next.val ? node.next.next : node.next
    return node
}
// @lc code=end

