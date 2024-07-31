// Activity 5 : Graph (optional)

// 1. Implement a graph class with methods to add vertices, add edges, and perform a breadth-first search(BFS).


class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For an undirected graph
    }
  
    bfs(start) {
      const visited = new Set();
      const queue = [start];
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          console.log(vertex);
          visited.add(vertex);
          const neighbors = this.adjacencyList.get(vertex);
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  graph.bfs('A'); // A B C D

  


//   addVertex(vertex): Adds a vertex to the graph.
// addEdge(vertex1, vertex2): Adds an edge between two vertices.
// bfs(start): Performs a breadth-first search starting from the given vertex and prints each visited vertex.





