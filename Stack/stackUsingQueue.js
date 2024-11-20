class stackUsingQueue{
    constructor(){
        this.q1 = []
        this.q2 = []
    }
    
    
    push(value){
        this.q2.push(value)
        while(this.q1.length){
            this.q2.push(this.q1.shift())
            
        }
        this.q1 = this.q2
        this.q2 =[]
        
        
    }
    pop(){
        this.q1.shift()
    }
    display(){
        console.log(this.q1)
    }
}


const stack = new stackUsingQueue()
stack.push(1)
stack.push(2)
stack.push(3)
stack.display()
stack.pop()
stack.display()