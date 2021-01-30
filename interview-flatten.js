function flatten(arr) {
  return arr.reduce((acc, cur) => {
    if(Array.isArray(cur)) {
      return acc.concat(flatten(cur))
    } else {
      return acc.concat(cur)
    }
  }, [])
}

let res = flatten([1,2,3,[[1,2]]])
