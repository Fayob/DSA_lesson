class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {}
  }

  addVertex(node) {
    this.adjacentList[node] = []
    this.numberOfNodes++
    return this
  }

  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
    return this
  }
}

const myGraph = new Graph()
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
console.log(myGraph.addVertex('6'));
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
console.log(myGraph.addEdge('6', '5'));
