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

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head =node
        }else{
            let prev = this.head
            while(prev.next){
                prev =prev.next
            }
            prev.next = node
        }
        this.size++
    }

    reverse(){
        let curr = this.head
        let prev =null
        while(curr){
            let next = curr.next
            curr.next =prev
            prev =curr
            curr =next

        }
        this.head = prev
    }

    print(){
        if(this.size === 0){
            return console.log('THis list is empty')
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues +=` ${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

let list = new LinkedList

list.append("v")

list.append("i")
list.append("n")
list.append("a")
list.append("y")
list.append("a")
list.append("k")


list.print()
list.reverse()
list.print()
