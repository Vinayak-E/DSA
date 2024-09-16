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
    return this.size === 0
  } 
  getSize(){
    return this.size
  }

  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        node.next = this.head
        this.head = node

    }
    this.size++

  }
  
  append(value){
    const node = new Node(value )
    if(this.isEmpty()){
        this.head  = node
        
    }else{
        let prev  = this.head
        while(prev.next){
         prev =   prev.next 
        }
        prev.next = node

    }
    this.size++
  }
  insert(value,index){
    if(index < 0 || index > this.size){
      return
    }
    if(index == 0){
     this.prepend(value)
    }else{
      let node = new Node(value)
      let prev = this.head
      for(let i =0 ;i<index -1;i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeIndex(index){
    if(index < 0 || index >= this.size){
      return null
    }
    let removeNode
    if(index == 0)
    {
      removeNode = this.head
      this.head = this.head.next

    }else{
      let prev = this.head
      for(let i =0;i<index-1 ;i++){
        prev =prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next

    }
    this.size--
    return removeNode.value
  }

  removeValue(value){
    if(this.isEmpty()){
      return null
    }
    if(this.head.value == value){
      this.head = this.head.next
      this.size--
      return value
    }else{
      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next
        
      }
      if(prev.next){
        let removeNode = prev.next
         prev.next = removeNode.next
         this.size--
         return value
      }
      return null
    }
  }

  search(value){
    if(this.isEmpty()){
      return console.log("The list is empty");
    }
    let curr =this.head
    let i =0
    while(curr){
      if(curr.value == value){
        return i
      }
      curr = curr.next
      i++
    }
return -1

  }

  reverse(){
    if(this.isEmpty()){
      return console.log("The list is empty")
    }else{
      let curr = this.head
      let prev = null
      while(curr){
        let next = curr.next
         curr.next =  prev 
         prev = curr
         curr = next

      }
      this.head = prev
    }

  
  }

  print(){
    if(this.isEmpty()){
        console.log("The list is empty")
  }else{
    let curr = this.head
    let listValues = ""
      while(curr){
        listValues += ` ${curr.value} -->`
        curr = curr.next
      }
      console.log(listValues)
  }
  }
}

const list = new LinkedList()
console.log("list is empty ",list.isEmpty())
list.prepend(4)
list.print()
list.prepend(6)
list.print()
list.append(77)
list.print()

list.insert(2,0)
list.insert(22,4)
list.insert(5,2)
list.print()
console.log(list.removeIndex(0));
console.log(list.removeValue(77))
list.reverse()
list.print()
console.log(list.search(22))