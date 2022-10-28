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

  breadthFirstSearch() {
    let currentNode = this.root
    let list = []
    let queue = []
    queue.push(currentNode)

    while (queue.length > 0) {
      currentNode = queue.shift()
      list.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list
  }

  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list
    }
    let currentNode = queue.shift()
    list.push(currentNode.value)
    if (currentNode.left) {
        queue.push(currentNode.left)
      }

    if (currentNode.right) {
      queue.push(currentNode.right)
    }

    return this.breadthFirstSearchR(queue, list)
  }

  DepthFirstSearchInOrder() {
    return traverseInOrder(this.root, [])
  }
  
  DepthFirstSearchPostOrder() {
    return traversePostOrder(this.root, [])
  }
  DepthFirstSearchPreOrder() {
    return traversePreOrder(this.root, [])
  }
}

const traverseInOrder = (node, list) => {
  // console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}


const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(1);
tree.insert(18);
tree.insert(6);
tree.insert(40);
tree.insert(0);
tree.insert(22);
tree.lookup(40);
tree.breadthFirstSearch();
tree.breadthFirstSearch(this.root, []);
console.log(tree.DepthFirstSearchInOrder(this.root, []));
