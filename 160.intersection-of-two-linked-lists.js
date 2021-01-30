/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// runtime 74, memory 25
// var getIntersectionNode = function(headA, headB) {
//     let current_a = headA
//     let current_b = headB
//     while(
//         current_a !== current_b
//     ) {
//         if(current_a !== null) {
//             current_a = current_a.next
//         } else {
//             current_a = headB
//         }
//         if(current_b !== null) {
//             current_b = current_b.next
//         } else {
//             current_b = headA
//         }
//     }
//     return current_a
// };

// Your runtime beats 66.52 % of javascript submissions
// Your memory usage beats 86.33 % of javascript submissions (45.8 MB)
function getIntersectionNode(headA, headB) {
  let headCopyA = headA
  let headCopyB = headB
  while(headA !== headB) {
    if(!headA) {
      headA = headCopyB
    } else {
      headA = headA.next
    }

    if(!headB) {
      headB = headCopyA
    } else {
      headB = headB.next
    }
  }
  return headA
}
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// // [4,1,8,4,5]
// let a_1 = new ListNode(4)
// let b_1 = new ListNode(1)
// let c_1 = new ListNode(8)
// let d_1 = new ListNode(4)
// let e_1 = new ListNode(5)

// a_1.next = b_1
// b_1.next = c_1
// c_1.next = d_1
// d_1.next = e_1

// let a_2 = new ListNode(5)
// let b_2 = new ListNode(0)
// let c_2 = new ListNode(1)
// let d_2 = new ListNode(8)
// let e_2 = new ListNode(4)
// let f_2 = new ListNode(5)

// a_2.next = b_2
// b_2.next = c_2
// c_2.next = d_2
// d_2.next = e_2
// e_2.next = f_2

// let res = getIntersectionNode(a_1, a_2)
// @lc code=end

