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

    isEmpty(){
        return this.size == 0 
    }

    getSize(){
        return this.size
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next 
            }
            prev.next = node
        }
this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empt;y")
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += `${curr.value} <-`
                curr = curr.next
            }
            console.log(listValues);
        }
    }


    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head =node
        }
        this.size++
    }
}



const list = new LinkedList()

list.append(4)

list.append(5)
list.append(6)
list.prepend(1)
console.log(list.getSize())
list.print()

