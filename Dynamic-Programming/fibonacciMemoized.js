// 0,1,1,2,3,5,8,13,21,34,55,89...

let calculations = 0
let count = 0

function fibonacci(n) { //O(2^n)
  count++
  if (n < 2) {
    return n
  }

  return fibonacci(n-1) + fibonacci(n-2)
}

// Top --> Bottom: From bottom to Top i.e from n to 0
function fibonacciMemoized() { //0(n)
  let cache = {}
  return function fib(n) {
    calculations++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

// Bottom --> Top: From bottom to Top i.e from 0 to n
function fibonacciMemoized2(n) {// O(n)
  let answer = [0,1]
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i-2] + answer[i-1])
  }
  return answer.pop()
}

console.log(fibonacci(20), 'we did ' + count + ' counts');
const memoizedCall = fibonacciMemoized()

console.log(memoizedCall(20), 'we did ' + calculations + ' calculations');
