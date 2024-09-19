class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else if (value === root.value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node to be deleted is found

            // Case 1: No children (leaf node)
            if (!root.left && !root.right) {
                return null;
            }

            // Case 2: One child (either left or right)
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            // Case 3: Two children
            // Find the in-order successor (minimum value in the right subtree)
            root.value = this.min(root.right);

            // Delete the in-order successor from the right subtree
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    isBST(root,min=null,max=null){
        if(root === null){
            return true
        }
        if((min != null && root.value <= min) || (max != null && root.value > max)){
            return false
        }
        return this.isBST(root.left, min, root.value) && this.isBST(root.right, root.value, max);
     
    }


    findClosest(target){
        let closest  = this.root.value
       function traverse(node){
            if(!node){
                return null
            }
            if(Math.abs(node.value - target) < Math.abs(closest - target)){
                closest = node.value
            }

            if(target < node.value){
                return traverse(node.left)
            }else{
                return traverse(node.right)
            }
        }
        traverse(this.root)
        return closest
    }
}

// Test the implementation
let tree = new BinarySearchTree();

tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(40);
tree.insert(30);
tree.insert(35);
tree.insert(25);


tree.levelOrder();  // Level-order traversal before deletion

tree.delete(30);

console.log("Level Order Traversal (After Deletion):");
tree.levelOrder();  // Level-order traversal after deletion
console.log(tree.isBST(tree.root));
let target = 16;
console.log("Closest Value to", target, ":", tree.findClosest(target));