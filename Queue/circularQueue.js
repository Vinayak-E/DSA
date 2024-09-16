class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength =0
        this.rear = -1
        this.front = -1
        
    }
    isFull(){
        return this.capacity == this.currentLength
    }
    
    isEmpty(){
        return this.currentLength ==0
    }
    enqueue(element){
        if(!this.isFull()){
         
             this.rear = (this.rear + 1) % this.capacity
                 this.items[this.rear] = element
            this.currentLength += 1
             if(this.front == -1){
                 this.front = this.rear
             }
        }
     
    }
    
    
    dequeue(){
        if(this.isEmpty()){
        
            return null
        } 
            let removeItem =this.items[this.front] 
            this.items[this.front] =null
            this.front = (this.front +1) % this.capacity
            this.currentLength -= 1
        
        if(this.isEmpty()){
            this.rear = -1
            this.front = -1
        }
        return removeItem
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }
    
  display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        
        let str = "";
        let i = this.front;

        while (i !== this.rear) {
            str += this.items[i] + " ";
            i = (i + 1) % this.capacity;
        }

        // Print the rear item as the loop stops one position before
        str += this.items[i];
        console.log(str);
    }

}
let queue = new circularQueue(5)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

queue.display()
queue.dequeue()

queue.display()
queue.enqueue(1)
queue.display()