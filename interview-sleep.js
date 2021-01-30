function timeout(timer) {
  return new Promise((res, rej) => {
    setTimeout(res, timer)
  })
}