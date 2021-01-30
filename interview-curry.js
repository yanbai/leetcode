// #1 implement
// f(1)(2)(3) //9
// f(2)(2)(1) //4
// f(2,2,1)   //4
// f()        //0

// function f(a, b, c) {
//   if(a&&b&&c) {
//     return (a+b) * c
//   } else if(a&&b) {
//     return function(c) {
//       return (a+b) * c
//     }
//   } else if(a) {
//     return function(b) {
//       return function(c) {
//         return (a+b) * c
//       }
//     }
//   } else {
//     return 0
//   }
// }

// res = f()

// #2 implement curry
// fn() {return a+b+c}
// let curried = curry(fn)
// curr(1)(2)(3) = 6

// function sum(a, b, c) {
//   return a+b+c
// }
// let curried = curry(sum)

// let res = curried(1)(2)(3)

function curry(fn) {
  // fn(a, b, c) { return a+b+c }
  return function recursion(...v1) {
    if(arguments.length >= fn.length)
      return fn.apply(null, arguments)
    return function(...v2) {
      return recursion.apply(null, v1.concat(v2))
    }
  }
}

function fn(a,b,c,d) {
  return (a+b+c)*d
}

let curried = curry(fn)
let res = curried(1)(2)(3)(2)
