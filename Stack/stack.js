class Stack{
    constructor(){
        this.item =[]
    }
    push(value){
        this.item.push(value)
    }

    peek() {
        if (this.item.length === 0) {
            console.log("Stack is empty");
            return undefined;
        }
        return this.item[this.item.length - 1];
    }

    pop(){
        return this.item.pop()
    }
    display(){
        return console.log(this.item)
    }
    getSize(){
        return this.item.length
    }
    removeMiddle(){
        let middle = Math.floor(this.item.length/2)
        let tempStack = new Stack()
        for(let i=0;i<middle;i++){
            tempStack.push(this.pop())
        }
        this.pop()
        while(tempStack.getSize()>0){
            this.push(tempStack.pop())
        }
    }
    stringReverse(str){
        for(let i=0;i<str.length;i++){
            this.push(str[i])
        }
        let result = '';
        for(let i=0;i<str.length;i++){
            result+=this.pop()
        }
        return result
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(120)
stack.push(102)
stack.push(105)
stack.display()
stack.removeMiddle()
console.log(stack.peek());
stack.display()
console.log(stack.stringReverse('vinayak'))