/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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

// var addTwoNumbers = function(l1, l2) {
//   let dummyHead = new ListNode
//   let curMoreThanTen = 0
//   let prevMoreThanTen = 0
//   let prev = dummyHead
//   while(l1 || l2) {
//       curMoreThanTen = l1.val+l2.val > 9 ? 1 : 0
      
//       let current = new ListNode()
//       current.val = (l1.val+l2.val)%10 + prevMoreThanTen
      
//       prevMoreThanTen = curMoreThanTen
//       prev.next = current
//       prev = current
//       l1=l1.next
//       l2=l2.next
//   }
//   if(prevMoreThanTen)
//       prev.val+=1
//   return dummyHead.next
// };


var addTwoNumbers = function(l1, l2) {
  let sum = 0
  let head = {}
  let cur = head
  while(l1 || l2 || sum) {
    sum += (l1 && l1.val) + (l2 && l2.val)
    cur.next = new ListNode(sum % 10)

    cur = cur.next
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    sum = Math.floor(sum/10)
  }
  return head.next
};

// @lc code=end

