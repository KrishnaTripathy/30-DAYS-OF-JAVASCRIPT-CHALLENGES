// 2. Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.


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
  
    bfsShortestPath(start, end) {
      const visited = new Set();
      const queue = [[start, [start]]];
  
      while (queue.length > 0) {
        const [vertex, path] = queue.shift();
        if (vertex === end) {
          return path;
        }
  
        if (!visited.has(vertex)) {
          visited.add(vertex);
          const neighbors = this.adjacencyList.get(vertex);
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push([neighbor, [...path, neighbor]]);
            }
          }
        }
      }
  
      return null; // No path found
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'E');
  
  const path = graph.bfsShortestPath('A', 'E');
  console.log(path); // ['A', 'B', 'D', 'E'] or ['A', 'C', 'D', 'E']

  

//   bfsShortestPath(start, end): Performs a breadth-first search to find the shortest path from start to end and returns the path as an array of vertices. If no path is found, it returns null.





