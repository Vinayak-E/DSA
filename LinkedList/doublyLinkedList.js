class Node{
    constructor(value){
        this.next = null
        this.value = value
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.size = 0
        this.head = null
        this.tail = null
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }

    prepend(value){

          let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        let node =new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node

        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return console.log("The list is empty");
        }else{
            const value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
       
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return console.log("The list is empty")
        }
         let value = this.tail.value
        if(this.size == 1){
            this.head =null
            this.tail = null

        }else{
            this.tail = this.tail.prev
            this.tail.next =null
            
        }
        this.size--
        return value
    }


    print(){
        let curr = this.head
        let listValues = ""
        while(curr){
            listValues +=`${curr.value}<-> `
            curr =curr.next
        }
        console.log(listValues);
    }
    printreverse(){
        let curr = this.tail
        let listValues =""
        while(curr){
            listValues += `${curr.value} < -- >`
            curr = curr.prev
        }
        console.log(listValues);
    }
}
let doubleList = new LinkedList()


doubleList.append(1)
doubleList.prepend(0)

doubleList.append(2)

doubleList.append(3)

doubleList.append(4)
doubleList.removeFromFront()
doubleList.removeFromEnd()

doubleList.print()
doubleList.printreverse()
console.log(doubleList.getSize());