/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// var MyQueue = function() {
//     this.data = []
//     this.helpArr = []
// };

// /**
//  * Push element x to the back of queue. 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//     this.data.push(x)
// };

// /**
//  * Removes the element from in front of queue and returns that element.
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//     // return this.data.shift()
//     while(this.data.length!== 0) {
//         this.helpArr.push(this.data.pop())
//     }
//     let ele = this.helpArr.pop()
//     while(this.helpArr.length!== 0) {
//         this.data.push(this.helpArr.pop())
//     }
//     return ele
// };

// /**
//  * Get the front element.
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//     return this.data[0]
// };

// /**
//  * Returns whether the queue is empty.
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     return this.data.length === 0
// };
// two stacks
// Your runtime beats 17.96 % of javascript submissions
// Your memory usage beats 63.21 % of javascript submissions (38.4 MB)
// class MyQueue {
//   constructor() {
//     this.stack = []
//     this.helper = []
//   }
//   // void
//   push(item) {
//     while(this.helper.length) {
//       const top = this.helper.pop()
//       this.stack.push(top)
//     }
//     this.stack.push(item)
//   }
//   // int
//   pop() {
//     while(this.stack.length) {
//       const top = this.stack.pop()
//       this.helper.push(top)
//     }
//     return this.helper.pop()
//   }
//   // int
//   peek() {
//     return this.stack.length ? this.stack[0] : this.helper[this.helper.length-1]
//   }
//   // boolean
//   empty() {
//     return !this.helper.length && !this.stack.length
//   }
// }


// two stacks
// Your runtime beats 43.52 % of javascript submissions
// Your memory usage beats 89.64 % of javascript submissions (38.1 MB)
class MyQueue {
  constructor() {
    this.stack = []
    this.helper = []
  }
  // void
  push(item) {
    this.stack.push(item)
  }
  // int
  pop() {
    if(this.helper.length)
      return this.helper.pop()
    while(this.stack.length) {
      const temp = this.stack.pop()
      this.helper.push(temp)
    }
    return this.helper.pop()
  }
  // int
  peek() {
    return this.stack.length?this.stack[0] : this.helper[this.helper.length-1]
  }
  // boolean
  empty() {
    return !this.helper.length && !this.stack.length
  }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// var obj = new MyQueue()
// obj.push(1)
// obj.push(2)

// var param_3 = obj.peek()
// var param_2 = obj.pop()
// var param_4 = obj.empty()
// console.log(obj.data)
// @lc code=end

