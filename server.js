class Graph{
    constructor(){
        this.adjacentList ={}
    }


    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] =new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacentList[vertex1].add(vertex2)
        
        this.adjacentList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex + "->" + [...this.adjacentList[vertex]]);

        }
    }

    hasedge(vertex1,vertex2){
        return this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacentList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacentList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }

        delete this.adjacentList[vertex]
    }

    bfs(startVertex){
        let result = []
        let visited = new Set()
        let queue = [startVertex]

        visited.add(startVertex)

        while(queue.length){
            let currentVertex = queue.shift()
            result.push(currentVertex)

            for(let neighbor of this.adjacentList[currentVertex]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
            }
        }
        return result
    }
}

let graph =new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("C","B")
graph.addEdge("D","B")
graph.addEdge("D","B")
console.log(graph.hasedge("D","A"));

graph.display()

console.log(graph.bfs("B"));
