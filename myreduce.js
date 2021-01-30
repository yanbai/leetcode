Array.prototype.myReduce = function(fn, initial) {
  // this: [1,2,3]
  let temp = typeof initial === 'undefined' ? this[0] : initial
  let index = typeof initial === 'undefined' ? 1 : 0
  for(let i=index; i<this.length; i++) {
    temp = fn(temp, this[i])
  }
  return temp
}

let res = [1,2,3].myReduce((acc, current) => acc+current)
