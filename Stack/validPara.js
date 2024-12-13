class Stack{
    constructor(){
        this.items = []
    }
    
    
    push(value){
        this.items.push(value)
    }
    
    pop(){
        return this.items.pop()
    }
    
    check(str){
        let openBrackets ="{[("
        let closingBrackets ="}])"
        let match ={
            '[' : ']',
            '{' : '}',
            '(':")"
        }
        let temp =[]
        for(let char of str){
            if(openBrackets.includes(char)){
                temp.push(char)
            }else if(closingBrackets.includes(char)){
                if(temp.length === 0|| match[temp.pop()]!== char){
                    return false
                }
            }
            
        }
        return temp.length==0
    }
    
    display(){
        console.log(this.items)
    }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
let str ='[][[]'
console.log(stack.check(str))
stack.display()