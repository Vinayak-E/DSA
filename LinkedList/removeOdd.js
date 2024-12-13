class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    
    append(value){
        let node = new Node(value)
        if(this.size == 0 ){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
                
            }
            current.next = node
        }
        this.size++
    }
    prepend(value){
        let node = new Node(value)
        if(this.size === 0){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeOdd(){
        let current = this.head
        while(this.head && this.head.value % 2 !== 0){
            this.head = this.head.next
            this.size--
        }

        while (current && current.next ){
            if(current.next.value % 2 !== 0){
                current.next = current.next.next
                this.size--
            }else{

                current = current.next
            }
        }
    }

       
    print(){
        let current = this.head
        let values = ''
        
        while(current){
            values += `${current.value} => `
            current = current.next
        }
        console.log(values)
    }

    }

    

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(2)
list.append(5)
list.append(6)
list.print()
list.removeOdd()
list.print()