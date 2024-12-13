class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1, vertex2) {
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    //  Breadth-First Search (BFS)
    bfs(startVertex) {
        const queue = [startVertex];
        const visited = new Set();
        const result = [];

        visited.add(startVertex);

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            for (let neighbor of this.adjacencyList[currentVertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // Depth-First Search (DFS)
    dfs(startVertex) {
        const visited = new Set();
        const result = [];

        const dfsHelper = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(startVertex);
        return result;
    }

    dfsIterative(start){
        let visited = new Set()
         let stack = [start]

         while(stack.length){
            let vertex = stack.pop()
            if(!visited.has(vertex)){
               console.log(vertex);
               visited.add(vertex)
            }
            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    stack.push(neighbor)
                  
                }
            }
         }
    }



    dfsRecursive(vertex,visited =new Set()){
        console.log(vertex)
        visited.add(vertex)
        for(let neighbor of this.adjacencyList[vertex]){
           if(! visited.has(neighbor)){
            this.dfsRecursive(neighbor,visited)
           }
        }
    }
}

let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.addEdge("C", "D")
graph.addEdge("A", "D")
graph.display()
// console.log("BFS starting from vertex A:", graph.bfs("A"))
console.log("DFS starting from vertex A:")
graph.dfsIterative("A")