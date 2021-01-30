/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
// var MinStack = function() {
//     this.data  = []
//     this.orderStack = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     this.data[this.data.length] = x
//     if(this.orderStack.length === 0) {
//         this.orderStack.push(x)
//     } else {
//         if(x <= this.orderStack[this.orderStack.length-1]) {
//             this.orderStack.push(x)
//         }
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     let topItem = this.data.pop()
//     if(topItem === this.orderStack[this.orderStack.length-1]) {
//         this.orderStack.pop()
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.data[this.data.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.orderStack[this.orderStack.length-1]
// };

class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }
  push(item) {
    const minTop = this.minStack[this.minStack.length-1]
    if(typeof minTop === 'undefined' || item<=minTop)
      this.minStack.push(item)
    this.stack.push(item)
  }
  pop() {
    const top = this.stack.pop()
    if(top === this.minStack[this.minStack.length-1])
      this.minStack.pop()
    return top
  }
  top() {
    return this.stack[this.stack.length-1]
  }
  getMin() {
    return this.minStack[this.minStack.length-1]
  }
}


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)

// obj.pop()
// var param_3 = obj.top()
var param_4 = obj.getMin()
// @lc code=end

