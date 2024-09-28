class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
         
        }
    }
    
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
      
    }

    display(){
      for(let vertex in this.adjacencyList){
        console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
      }
    }

    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }



    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }


    bfs(startVertex){
        let result = []
        let visited = new Set()
        let queue = [startVertex]

        visited.add(startVertex)

        while(queue.length){
            let currentVertex = queue.shift()
            result.push(currentVertex)

            for(let neighbor of this.adjacencyList[currentVertex]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
            }
        }
        return result
    }
  
}

let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()

console.log(graph.bfs("A"));
