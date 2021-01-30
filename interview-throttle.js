function throttle(fn, delay) {
  let context, timer
  return function (...args) {
    context = this
    if(!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, delay)
    }
  }
}

function debounce(fn, delay) {
  let context, timer
  return function (...args) {
    context = this
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}
