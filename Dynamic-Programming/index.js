const addTo80 = (n) => {
  console.log('Long time');
  return n + 80
}

const memoizedAddTo80 = () => {
  let cache = {}
  return function (n) {
    if (n in cache) {
      return cache[n]
    } else {
      console.log('Long time');
      cache[n] = n + 80
      return cache[n]
    }
  }
}

const memoized = memoizedAddTo80()

console.log(memoized(4));
console.log(memoized(5));
console.log(memoized(4));

// console.log(memoizedAddTo80(4));
// console.log(memoizedAddTo80(4));