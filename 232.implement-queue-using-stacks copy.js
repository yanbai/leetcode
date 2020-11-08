/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.data = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.data[this.data.length] = x
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let tempData = []

    while(this.data.length!==0) {
        let backItem = this.data.pop()
        tempData.push(backItem)
    }
    let removedItem = tempData.pop()
    while(tempData.length!==0) {
        this.data.push(tempData.pop())
    }
    return removedItem
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.data[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.data.length === 0
};

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

