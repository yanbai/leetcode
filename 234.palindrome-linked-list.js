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
    let current = head
    let temp = null
    let mid = null
    let slow = current
    let fast = current
    let reversed = null
    if(current === null) 
        return true
    if(current !== null && current.next === null) 
        return true
    if(current.next.next === null) {
        return current.val === current.next.val
    }
    while(fast !== null && fast.next !== null) {
        // cache slow
        temp = slow
        // loop
        slow = slow.next
        fast = fast.next.next
        // build reversed
        temp.next = reversed
        reversed = temp
    }
    if(fast !== null) {
        mid = slow.next
    } else {
        mid = slow
    }
    while(mid!==null) {
        if(mid.val !== reversed.val) return false
        mid = mid.next
        reversed = reversed.next
    }

    return true
};
// console.log(isPalindrome(a_1))
// @lc code=end
