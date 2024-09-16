class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }


    dequeue(){
      return  this.items.shift()
    }

    isEmpty(){
        return  this.items.length === 0
    }

    getSize(){
        return this.items.length
    }
     

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }else{
            console.log("The queue is empty")
        }
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(6)
queue.enqueue(7)
queue.dequeue()
queue.print()
console.log(queue.getSize());

console.log(queue.isEmpty());


// Time Complexity:

// enqueue(): O(1)
// dequeue(): O(n)
// isEmpty(): O(1)
// getSize(): O(1)
// peek(): O(1)
// print(): O(n)