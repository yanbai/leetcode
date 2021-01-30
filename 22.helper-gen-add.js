// 1. gen add
function genAdd(n) {
  let res = []
  _gen(1, n, '')
  
  function _gen(currentlevel, totalLevel, str) {
    if(currentlevel>totalLevel){
      res.push(str)
      return
    }
    str+='+'
    currentlevel++
    _gen(currentlevel, totalLevel, str)
  }

  return res
}

let res = genAdd(2)
console.log(res)

// 2. gen add or minus
function genAddOrMinus(n) {
  let outer_res = []
  let possibilities = ['+', '-']
  _gen(1, n, '')
  
  function _gen(currentlevel, totalLevel, str) {
    if(currentlevel>totalLevel){
      outer_res.push(str)
      return
    }
    for(let x of possibilities){
      // str+=x
      // currentlevel++
      _gen(currentlevel+1, totalLevel, str+x)
    }
  }

  return outer_res
}

res = genAddOrMinus(2)
console.log(res)
