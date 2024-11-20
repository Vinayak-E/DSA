class QueueUsingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    
    }

       enqueue(value){
        this.stack1.push(value)
    }

    
    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
          
        }
         return this.stack2.pop();
    }
    
    
    display(){
        let result = [...this.stack2.reverse(),...this.stack1]
        console.log(result)
        
    }
}

const queue = new QueueUsingStack()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)


queue.display()
queue.dequeue()
queue.display()
