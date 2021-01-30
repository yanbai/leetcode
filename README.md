# leetcode
leetcode practice
start from 2020 Feb

## tree
104. Maximum Depth of Binary Tree (Easy) #3
111. Minimum Depth of Binary Tree (Easy) #2
543. Diameter of Binary Tree (Easy) #1
112. Path Sum (Easy) #1 depth function
94. Binary Tree Inorder Traversal (Medium) #-1
144. Binary Tree Preorder Traversal (Medium) #-1
145. Binary Tree Postorder Traversal (Medium) #-1
98. validate binary search tree #1 recursion #-1 inorder
235. Lowest Common Ancestor of a Binary Search Tree (Easy) #2
236. Lowest Common Ancestor of a Binary Tree (Medium) #2
101. Symmetric Tree (Easy) #-1
226. Invert Binary Tree (Easy) #2

108. Convert Sorted Array to Binary Search Tree (Easy) 还没做
109. Convert Sorted List to Binary Search Tree (Medium)
110. Balanced Binary Tree (Easy)
230. Kth Smallest Element in a BST (Medium)
257. Binary Tree Paths    
437. Path Sum III (Easy)
501. Find Mode in Binary Search Tree (Easy)
556. Next Greater Element III    
572. Subtree of Another Tree (Easy)
617. Merge Two Binary Trees (Easy)
669. Trim a Binary Search Tree (Easy)
687. Longest Univalue Path (Easy)
## tree bfs dfs
404. Sum of Left Leaves (Easy) #2
513. Find Bottom Left Tree Value (Easy) #2
637. Average of Levels in Binary Tree (Easy)
102. Binary Tree Level Order

## link list
19. Remove Nth Node From End of List (Medium) #0
21. Merge Two Sorted Lists (Easy) #2
24. Swap Nodes in Pairs (Medium) #3
83. Remove Duplicates from Sorted List (Easy)
138. copy-list-with-random-pointer
141. Linked List Cycle #2
160. Intersection of Two Linked Lists (Easy) #2
206. Reverse Linked List (Easy) #3 while #-1 recursion
234. Palindrome Linked List (Easy)

## backtrace. DFS 
22. generate parentheses #1
22. helper-gen-add.js
46. permutations #1
47. permutations-ii #1
77. combinations #1
179. Largest Number
337. House Robber III (Medium)

## 剪枝
36. 数独
37. 
51. N-queens #2
52. 

## recursion, divide&conquer
50. pow-x-n #3
169. majority-element #-1
241. different-ways-to-add-parentheses #1
interview-find100.js #-1

## DP
70. climbing-stairs #2
120. triangle #2
152. Maximum Product Subarray #-1
276. Paint Fence
292. Nim Game #1
300. longest-increasing-subsequence
322. coin change
238. Product of Array Except Self
746. Min Cost Climbing Stairs #2
## greedy
122. buy sell stocks

## 二分查找
69. Sqrt(x) #2
<!-- 拓展阅读: 牛顿迭代法 -->
https://www.beyond3d.com/content/articles/8/
278. First Bad Version #2
704. Binary Search #3

## hash
1. Two Sum #3
205. Isomorphic Strings (Easy) string
409. Longest Palindrome (Easy) string
242. Valid Anagram (Easy) #2

## stack queue
20. Valid Parentheses (Easy) #3
394. Decode String #-1
155. Min Stack (Easy) #1
225. Implement Stack using Queues (Easy)
232. Implement Queue using Stacks (Easy) #1
## MIS
739. Daily Temperatures (Medium) #3
503. Next Greater Element II (Medium) #1
402. Remove K Digits #2
## sliding window
## 优先队列 实现机制 1.heap 2.BST
239. Sliding Window Maximum 用deque #1
703. Kth Largest Element in a Stream 不会考 因为js没有优先队列或者堆

## two point
15. 3-sum #3
647. Palindromic Substrings (Medium)

## string match
28. implement-str-str (dp) #-1

## math / string
2. add-two-numbers #1
415. Add Strings #2
165. Compare Version Numbers #1
9. Palindrome Number (Easy) #2
470. Implement Rand10() Using Rand7() #1

151. reverse-words-in-a-string #0
557. reverse-words-in-a-string-iii #1
696. Count Binary Substrings (Easy)

## array matrix
283. Move Zeroes (Easy)
566. Reshape the Matrix (Easy)
485. Max Consecutive Ones (Easy)

## 位运算（bitwise operations）
191. 1-bit hamming weight 没做
231. power of two
338. counting bits


## programe
1. "实例：模板编译"
2. 就是过滤 HTML 字符串
3. 国际化处理
4. reduce #1
5. throttle, debounce #1
6. flatten #1
7. curry #2
8. bind #1
9. qsort #1
10. symbol
13. myPromise
14. f(1)(2)(3) //9 #1
    f(2)(2)(1) //4
    f(2,2,1)   //4
    f()        //0

### String:
12. jsx函数的具体实现
https://gist.github.com/lygaret/a68220defa69174bdec5
13. 提示字符串格式
YYYY-MM-12
14. code point超过两个字节的汉字 如何获得码点
var s = "𠮷"
码点是0x20BB7
UTF-16 编码为0xD842 0xDFB7（十进制为55362 57271），需要4个字节储存
15. let s = '𠮷a' 如何打出这两个字的码点
// 20bb7
// 61
16. 测试一个字符由两个字节还是由四个字节组成
17. 字符串码点和字符串相互转化
18. 2进制 16进制互换
### regexp:
19. 正确返回字符串长度的函数
var s = '𠮷𠮷';
s.length // 4
codePointLength(s) // 2
### promise
1. timeout
2. 按顺序完成异步操作

### function
1. 
function m1({x = 0, y = 0} = {})
function m2({x, y} = {x:0, y:0})
m1({x: 3})
m2({x: 3})

2. strict 模式
严格模式下不能用前缀0表示八进制
严格模式下没有func.arguments：返回调用时函数的参数。
严格模式下没有func.caller：返回调用当前函数的那个函数

3. 蹦床函数（trampoline）可以将递归执行转为循环执行

4. 箭头函数this 例子