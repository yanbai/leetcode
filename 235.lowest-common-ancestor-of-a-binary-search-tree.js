/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


// 27/27 cases passed (100 ms)
// Your runtime beats 50.25 % of javascript submissions
// Your memory usage beats 80.66 % of javascript submissions (48.4 MB)
// lowestCommonAncestor is actually findPorQ
// actually we have two ways, one is recursion, another is while(iterate)
// recursion:
function lowestCommonAncestor(node, p, q) {
  if(node.val > p.val && node.val > q.val) {
    return lowestCommonAncestor(node.left, p, q)
  } else if(node.val < p.val && node.val < q.val) {
    return lowestCommonAncestor(node.right, p, q)
  } else {
    return node
  }
}

// iterate:
// function  lowestCommonAncestor(node, p, q) {
//   while(node) {
//     if(node.val > p.val && node.val > q.val) {
//       node = node.left
//     } else if (node.val < p.val && node.val < q.val) {
//       node = node.right
//     } else {
//       break
//     }
//   }
//   return node
// }


// let bst = new BST()
// bst.insert(3)
// bst.insert(1)
// bst.insert(4)
// bst.insert(2)
// // bst.insert(4)
// // bst.insert(7)
// // bst.insert(9)
// // bst.insert(3)
// // bst.insert(5)

// a = lowestCommonAncestor(bst.root, 2, 3)
// console.log(a)

// @lc code=end

