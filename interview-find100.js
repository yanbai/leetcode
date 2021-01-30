// findSequences('123456789', 100);
// output:
// +1+2+3-4+5+6+78+9
// +1+2+34-5+67-8+9
// +1+23-4+5+6+78-9
// +1+23-4+56+7+8+9
// -1+2-3+4+5+6+78+9
// +12+3+4+5-6-7+89
// +12+3-4+5+67+8+9
// +12-3-4+5-6+7+89
// +123+4-5+67-89
// +123-4-5-6-7+8-9
// +123+45-67+8-9
// +123-45-67+89

// 123 6
// 12
function findSequences(str, total) {
  let res = []
  function recursion(string, sum, path) {
    if(string === '' && sum === 0) {
      res.push(path)
      return
    }
    for(let i=1; i<= string.length; i++) {
      let [l, r] = [
        parseInt(string.slice(0, i)),
        string.slice(i)
      ]
      recursion(r, sum - l, path + '+' + l)
      recursion(r, sum + l, path + '-' + l)
    }
  }
  recursion(str, total, '')
  return res
}

// let res = findSequences('123456789', 100)

