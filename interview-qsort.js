function qsort(arr) {
  if(!arr.length)
    return []
  let [left, right, pivot] = [[], [], arr[0]]
  for(let n of arr) {
    n < pivot ? left.push(n) : right.push(n)
  }
  return qsort(left).concat(pivot, qsort(right))
}