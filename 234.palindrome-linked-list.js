/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// let a_5 = new ListNode(1, null)
// let a_4 = new ListNode(2, a_5)
// let a_3 = new ListNode(3, a_4)
// let a_2 = new ListNode(2, a_3)
// let a_1 = new ListNode(1, a_2)

// run time unstable
// from 20%~80%
var isPalindrome = function(head) {
    if(!head || !head.next)
        return head
    let slow = head
    let fast = head
    let total = 0
    let res = true
    while(fast) {
        fast = fast.next
        total++
    }
    fast = head
    let middle = total%2===0 ? (total/2) : Math.ceil(total/2)
    let index = 0
    while(fast) {
        if(index >= middle) {
            if(slow.val !== fast.val) {
                res = false
                break
            }
            slow = slow.next
        }
        fast = fast.next
        index++
    }
    return res
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let a_1 = new ListNode(1)
let b_1 = new ListNode(2)
let c_1 = new ListNode(2)
let d_1 = new ListNode(1)

a_1.next = b_1
b_1.next = c_1
c_1.next = d_1
console.log(isPalindrome(a_1))
// @lc code=end
