// parrel request, order output
function logInOrder(urls) {
  const promises = urls.map(async url => {
    let res = await fetch(url)
    return res.text()
  })
  promises.reduce((acc, current) => {
    return acc.then(() => current)
  }, Promise.resolve())
}

// parrel request, order output
async function logInOrder(urls) {
  const promises = urls.map(async url => {
    const res = await fetch(url)
    return res.text()
  })
  for (let promise of promises) {
    let res = await promise()
    console.log(res)
  }
}

// order request, order output
async function orderProcess(urls) {
  for(const url of urls) {
    const res = await fetch(url)
    await res.text()
  }
}

// inorder process promise
async function inOrderProcess(promises) {
  for(let promise of promises) {
    let res = await promise()
    // handle res inorder
  }
}

// parrel process promise
function parrelProcess(promises) {
  for(let promise of promises) {
    promise().then(data => {
      // handle data
    })
  }
}

// parrel process promise, output inorder
// function parrelProcess(promises) {
//   let arr = promises.map(async promise => {
//     let res = await promise()
//     return res
//   })
//   return arr
// }

async function _parrelProcess(promises) {
  // let res = new Array
  // for(let i=0; i<promises.length; i++) {
  //   res[i] = await promises[i]()
  // }
  let arr = promises.map(i=> i())
  console.log(arr)
}

let taskA = () => new Promise((res, rej) => {
  setTimeout(() => {
    res('this is a')
  }, 150)
})

let taskB = () => new Promise((res, rej) => {
  setTimeout(() => {
    res('this is B')
  }, 50)
})

let taskC = () => new Promise((res, rej) => {
  setTimeout(() => {
    res('this is C')
  }, 100)
})
const promises=[
  taskA,
  taskB,
  taskC
]
_parrelProcess(promises)