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
// var removeNthFromEnd = function(head, n) {
//     let preHead = new ListNode(0, head)
//     let slow = preHead
//     let fast = preHead
//     while(n--) {
//         fast = fast.next
//     }
//     while(fast && fast.next) {
//         slow = slow.next
//         fast = fast.next
//     }
//     slow.next = slow.next.next
//     return preHead.next
// }

// var removeNthFromEnd = function(head, n) {
//     if(!head || !head.next)
//         return null
//     let pre = new ListNode(0)
//     pre.next = head
//     let index = 0
//     let slow = pre
//     let fast = pre
//     while(fast) {
//         fast = fast.next
//         if(index > n)
//             slow = slow.next
//         index++
//     }
//     slow.next = slow.next.next
//     return pre.next
// }

// two points
function removeNthFromEnd(node, k) {
  if(!node || !node.next)
    return null
  let [count, dummyNode] = [0, new ListNode(-1)]
  dummyNode.next = node
  let [fast, slow] = [dummyNode, dummyNode]
  while(fast) {
    fast = fast.next
    if(count > k)
    slow = slow.next
    count++
  }
  slow.next = slow.next.next
  return dummyNode.next
}


// 1st loop twice fail
// function removeNthFromEnd(node, k) {
//   if(!node)
//     return []
//   let [length, first, count, dummyNode] = [0, node, 0, new ListNode(-1)]
//   dummyNode.next = node
//   node = dummyNode
//   while(node) {
//     length++
//     node = node.next
//   }
//   node = dummyNode
//   let n = length-k
//   while(node) {
//     count++
//     if(count === n) {
//       node.next = node.next.next
//       break
//     }
//     node = node.next
//   }
//   return first
// }


function ListNode(val) {
    this.val = val;
    this.next = null;
}

// [4,1,8,4,5]
let a_1 = new ListNode(1)
let b_1 = new ListNode(2)
let c_1 = new ListNode(3)
let d_1 = new ListNode(4)
let e_1 = new ListNode(5)

a_1.next = b_1
b_1.next = c_1
c_1.next = d_1
d_1.next = e_1

let res = removeNthFromEnd(a_1, 2)

// @lc code=end

