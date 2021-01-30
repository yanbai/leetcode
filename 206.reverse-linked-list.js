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
// function reverseList(node) {
//     if(!node || !node.next)
//         return node
//     let [tail, next] = [null, node.next]
//     tail = reverseList(next)
//     next.next = node
//     node.next = null
//     return tail
// }

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let a_1 = new ListNode(1)
let b_1 = new ListNode(2)
let c_1 = new ListNode(3)
let d_1 = new ListNode(4)
let e_1 = new ListNode(5)

a_1.next = b_1
b_1.next = c_1
c_1.next = d_1
d_1.next = e_1

let res = reverseList(a_1)

// function reverseList(node) {
//   let [next, prev] = [null, null]
//   while(node) {
//     next = node.next
//     node.next = prev
//     prev = node
//     node = next
//   }
//   return prev
// }



// @lc code=end
