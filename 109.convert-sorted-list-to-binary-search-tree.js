/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function(head) {
    return makeTree(head, null)
};
function makeTree(head, tail) {
    if(head === tail)
        return null
    let slow = head
    let fast = head
    while(fast !== tail) {
        fast = fast.next
        if(fast !== tail) {
            slow = slow.next
            fast = fast.next
        }
    }
    let node = new TreeNode(slow.val)
    node.left = makeTree(head, slow)
    node.right = makeTree(slow.next, tail)
    return node
}
// @lc code=end

