class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
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
        this.head = node
    }
    this.size++
  }

  append(value){
    let node = new Node(value)
    if(this.isEmpty()){
        this.head = node
        this.tail = node
    }else{
        this.tail.next =node
        this.tail = node
    }
    this.size++
  }
  removeFromFront(){
    if(this.isEmpty()){
        return null
    }else{
        let value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
  }

  removeFromEnd(){
    if(this.isEmpty()){
        return null
    }
    let value = this.tail.value
    if(this.size ==1){
        this.head =null
        this.tail = null
    }else{
        let prev =this.head
        while(prev.next !== tail){
            prev =prev.next
        }
        prev.next =null
         this.tail = prev
    }
    this.size--
    return value

  }

  print(){
    if(this.isEmpty()){
        return console.log("The list is empty");
    }else{
        let curr = this.head
        let listValues =""
        while(curr){
            listValues +=`${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
  }

}

let list = new LinkedList()
list.append(4)
list.prepend(5)
list.removeFromFront()
list.removeFromEnd()
list.print()
console.log(list.isEmpty());