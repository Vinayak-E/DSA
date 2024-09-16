class Queue{
    constructor(){
        this.items = {}
        this.rear= 0
        this.front=0
    }

  isEmpty(){
    return this.front == this.rear
  }

  getSize(){
    return this.rear - this.front
  }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++

    }

    dequeue(){
        let dequeueElement = this.items[this.front]
        delete this.items[this.front]
        this.front++
             return dequeueElement
    }

    peek(){
        return this.items[this.front]
    }
    print(){
        console.log(this.items)
        console.log(Object.values(this.items));
    }
}


let queue = new Queue()
queue.enqueue(1)
queue.enqueue(16)
queue.enqueue(13)
queue.enqueue(22)
queue.enqueue(7)
queue.enqueue(2)
queue.dequeue()
queue.peek()
queue.print()

console.log(queue.isEmpty());
console.log(queue.getSize());

// Time Complexity: O(1).
// Space Complexity: O(n)