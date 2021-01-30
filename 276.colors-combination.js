/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// dfs finished but not pass submit only because of performance
function numWays(n, k) {
  if(n === 0)
    return 0
  let res = []
  let originalCandidate = new Array(k).fill(0).map((item, index) => index+'')
  function _dfs(currentLevel, innerRes, useSame, useColor) {
    if(currentLevel === n) {
      res.push(innerRes)
      return
    }

    if(useSame) {
      for(let i=0; i<originalCandidate.length; i++) {
        if(originalCandidate[i] !== useColor) {
          _dfs(currentLevel+1, innerRes+originalCandidate[i], false, originalCandidate[i])
        }
      }
    } else {
      for(let i=0; i<originalCandidate.length; i++) {
        if(originalCandidate[i] === useColor) {
          _dfs(currentLevel+1, innerRes+originalCandidate[i], true, originalCandidate[i])
        } else {
          _dfs(currentLevel+1, innerRes+originalCandidate[i], false, originalCandidate[i])
        }
      }
    }
  }

  for(let i=0; i<originalCandidate.length; i++) {
    _dfs(1, originalCandidate[i], false, originalCandidate[i])
  }

  return res.length
}

// recursion not finished
function numWays(n, k) {
  for(let i=0; i<=n; i++) {
    if(i < 3) {
      return i*k
    } else {
      return k+(numWays(n-1)-k) * k
    }
  }
}

// dp finished and passed submit
function numWays(n, k) {
  if(k===0 || n===0)
    return 0
  if(k<2) {
    return n>2 ? 0 : 1
  }
  let dp = new Array(n+1)
  for(let i=0; i<=n; i++) {
    if (i<2) {
      dp[i] = i*k
    } else if(i === 2) {
      dp[i] = dp[i-1]*k
    } else {
      // dp[i] = (dp[i-1]-k)*k + k*(k-1)
      dp[i] = dp[i - 2] * (k - 1) + dp[i - 1] * (k - 1)
    }
  }
  return dp[n]
}

let res = numWays(2, 3)
