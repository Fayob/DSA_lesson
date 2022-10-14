class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack with linked list
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }

    if (this.length > 0) {
      return this.top;
    }
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.bottom) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
    this.top = newNode
    this.top.next = holdingPointer
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null
    }
    // const nextNode = this.top // to have reference to the last item removed
    this.top = this.top.next
    this.length--
    return this
  }
}

const myStack = new Stack()
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('amazon'));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());
