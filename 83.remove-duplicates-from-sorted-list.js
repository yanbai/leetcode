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

// };

//runtime 45, memory 45 
var deleteDuplicates = function(node) {
    if(!node || !node.next)
        return node
    node.next = deleteDuplicates(node.next)
    if(node.val === node.next.val)
        node.next = node.next.next
    return node
}
// @lc code=end

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// let a_1 = new ListNode(1)
// let b_1 = new ListNode(1)
// let c_1 = new ListNode(2)
// // let d_1 = new ListNode(4)
// // let e_1 = new ListNode(5)

// a_1.next = b_1
// b_1.next = c_1
// // c_1.next = d_1
// // d_1.next = e_1
// let a = deleteDuplicates(a_1)
// console.log(a)
