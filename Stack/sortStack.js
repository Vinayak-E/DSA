class Stack{
    constructor(){
        this.items = []
    }
    
    insert(value){
        this.items.push(value)
    }
    
    pop(){
      return  this.items.pop()
    }
    peek(){
     return this.items[this.items.length-1]
    }

    sort(){ 
        let tempStack = []
        
        while(this.items.length){
            let cur = this.pop()
            
            while(tempStack.length &&  cur > tempStack[tempStack.length -1]){
                this.insert(tempStack.pop())
            }
            tempStack.push(cur)
        }
        
        while(tempStack.length){
            this.insert(tempStack.pop())
        }
    }
    
    display(){
        console.log(this.items)
    }
}


const stack = new Stack()

stack.insert(883)
stack.insert(2)
stack.insert(31)
stack.insert(354)
stack.insert(13)
stack.sort()
stack.display()