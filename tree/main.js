class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return "Not Found";
  }

  // Advanced Concept
  // remove(value) {
  //   if (!this.root) {
  //     return false;
  //   }
  //   let currentNode = this.root;
  //   let parentNode = null;
  //   while (currentNode) {
  //     if (value < currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.left;
  //     } else if (value > currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.right;
  //     } else if (value === currentNode.value) {
  //       //We have a match, get to work

  //       //Option 1: No right child:
  //       if (currentNode.right === null) {
  //         if (parentNode === null) {
  //           this.root = currentNode.left;
  //         } else {
  //           // if parent > current value, make current left child a child of parent
  //           if (currentNode.value < parentNode.value) {
  //             parentNode.left = currentNode.left;

  //             // if parent < current value, make left child a right child of parent
  //           } else if (currentNode.value > parentNode.value) {
  //             parentNode.right = currentNode.left;
  //           }
  //         }

  //         //left child
  //         //Option 2: Right child which doesn't have a left child
  //       } else if (currentNode.right.left === null) {
  //         if (parentNode === null) {
  //           this.root = currentNode.left;
  //         } else {
  //           currentNode.right.left = currentNode.left;

  //           // if parent > current, make right child of the left the parent
  //           if (currentNode.value < parentNode.value) {
  //             parentNode.left = currentNode.right;

  //             // if parent < current, make right child a right child of the parent
  //           } else if (currentNode.value > parentNode.value) {
  //             parentNode.right = currentNode.right;
  //           }
  //         }
  //       } else if (currentNode.right.left === null) {
  //         // Option 3: Right child that has a left child
  //       } else {
  //         // find the right child's left most child
  //         let leftmost = currentNode.right.left;
  //         let leftmostParent = currentNode.right;
  //         while (leftmost.left !== null) {
  //           leftmostParent = leftmost;
  //           leftmost = leftmost.left;
  //         }

  //         //Parent's left subtree is now leftmost's right subtree
  //         leftmostParent.left = leftmost.right;
  //         leftmost.left = currentNode.left;
  //         leftmost.right = currentNode.right;

  //         if (parentNode === null) {
  //           this.root = leftmost;
  //         } else {
  //           if (currentNode.value < parentNode.value) {
  //             parentNode.left = leftmost;
  //           } else if (currentNode.value > parentNode.value) {
  //             parentNode.right = leftmost;
  //           }
  //         }
  //       }
  //       return true
  //     }
  //   }
  // }
}

const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(1);
tree.insert(18);
tree.insert(6);
tree.insert(40);
console.log(tree.insert(0));
console.log(tree.insert(22));
console.log(tree.lookup(40));
