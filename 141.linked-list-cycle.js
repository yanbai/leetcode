/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
// method 1, bruit force
// 17/17 cases passed (92 ms)
// Your runtime beats 32.15 % of javascript submissions
// Your memory usage beats 14.34 % of javascript submissions (41.4 MB)
// var hasCycle = function(head) {
//   let s = new Set
//   while(head) {
//     if(!s.has(head)) {
//       s.add(head)
//     } else {
//       return true
//     }
//     head = head.next
//   }
//   return false
// };


// 17/17 cases passed (88 ms)
// Your runtime beats 61.99 % of javascript submissions
// Your memory usage beats 31.98 % of javascript submissions (41.2 MB)
function hasCycle(head) {
  let fast = head
  let slow = head
  while(fast && slow && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(slow === fast)
      return true
  }
  return false
}
// @lc code=end

