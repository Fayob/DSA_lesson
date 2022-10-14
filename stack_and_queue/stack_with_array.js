class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack with Array
class StackArray {
  constructor() {
    this.array = []
  }

  peek() {
    if (this.array.length === 0) {
      return null
    }
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }
}

const stackWithArray = new StackArray()
console.log(stackWithArray.push('google')); 
console.log(stackWithArray.push('udemy')); 
console.log(stackWithArray.push('amazon')); 
console.log(stackWithArray.pop()); 
console.log(stackWithArray.pop()); 
console.log(stackWithArray.pop()); 
console.log(stackWithArray.peek()); 