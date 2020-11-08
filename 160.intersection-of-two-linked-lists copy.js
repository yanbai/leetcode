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
var getIntersectionNode = function(headA, headB) {
    let p1 = headA
    let p2 = headB
    while(p1 !== p2) {
        p1 = p1!==null ? p1.next : headB
        p2 = p2!==null ? p2.next : headA
    }
    return p1
};
// @lc code=end

