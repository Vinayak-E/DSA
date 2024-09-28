// Tree Node class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    // Add a child to this node
    addChild(node) {
        this.children.push(node);
    }
}

// Tree class
class Tree {
    constructor(value) {
       
        this.root = new TreeNode(value);
    }

   
    dfs(node = this.root) {
        console.log(node.value);
        for (let child of node.children) {
            this.dfs(child); 
        }
    }

    bfs() {
        let queue = [this.root];  

        while (queue.length > 0) {
            let currentNode = queue.shift(); 
            console.log(currentNode.value);

            for (let child of currentNode.children) {
                queue.push(child);
            }
        }
    }
}


let tree = new Tree("A");

let nodeB = new TreeNode("B");
let nodeC = new TreeNode("C");
tree.root.addChild(nodeB);
tree.root.addChild(nodeC);


let nodeD = new TreeNode("D");
let nodeE = new TreeNode("E");
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);


let nodeF = new TreeNode("F");
nodeC.addChild(nodeF);

console.log("Depth First Search Traversal:");
tree.dfs();

console.log("\nBreadth First Search Traversal:");
tree.bfs();
