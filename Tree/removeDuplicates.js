class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    
    insert(value) {
        let node = new Node(value)
        if (this.root == null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    inOrder(root) {
        if (!root) {
            return
        }
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }

    min(root) {
        if (!root.left) {
            return root.value
        }
        return this.min(root.left)
    }
    
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return null
        }
        
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
          
            if (!root.left && !root.right) {
                return null 
            }
            if (!root.left) {
                return root.right 
            }
            if (!root.right) {
                return root.left 
            }
            
     
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    removeduplicates() {
        const uniqueValues = new Set()
        const valuesToDelete = []

        // First pass: identify duplicates
        const findDuplicates = (node) => {
            if (!node) return

            findDuplicates(node.left)
            
            if (uniqueValues.has(node.value)) {
                valuesToDelete.push(node.value)
            } else {
                uniqueValues.add(node.value)
            }
            
            findDuplicates(node.right)
        }

        // Second pass: delete duplicates
        const deleteDuplicates = () => {
            for (let value of valuesToDelete) {
                this.delete(value)
            }
        }

        // Execute the duplicate removal process
        findDuplicates(this.root)
        deleteDuplicates()
    }
}


    const tree = new Tree()

    tree.insert(3)
    tree.insert(5)
    tree.insert(32)
    tree.insert(2)
    tree.insert(15)
    tree.insert(55)
    tree.insert(15)  
    tree.insert(3)   
    console.log("Original Tree (In-order):")
    tree.inOrder(tree.root)
    
    tree.removeduplicates()
    
    console.log("\nTree after removing duplicates (In-order):")
    tree.inOrder(tree.root)

