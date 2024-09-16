class Queue{
    constructor(){
        this.items = {}
        this.rear = 0

        this.front = 0
    }


    enqueue(element){
        this.items[this.rear] =element
        this.rear++

    }

    dequeue(){
        delete this.items[this.front]
        this.front++
    }

    print(){
        console.log(this.items);
    }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()
queue.dequeue()
queue.print()