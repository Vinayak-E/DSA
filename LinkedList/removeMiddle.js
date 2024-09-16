class Node{
    constructor(value){
        this.value = value
        this.next = null
   
    }
}
class LinkedList{
    constructor(){
        this.head =null
        this.size =0
    }

    isEmpty(){
        return this.size === 0
    }

    getsize(){
        return this.size
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            
        }else{
            let prev = this.head
            while(prev.next){
                prev =prev.next
            }
            prev.next = node
        }
        this.size++

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

    insert(value,index){
       if(index < 0 || index > this.size){
        return null
       }
       if(index == 0){
        this.prepend(value)
       }else{
        let node = new Node(value)
        let prev = this.head
        for(let i = 0; i<index-1;i++){
            prev = prev.next
        } 
        node.next = prev.next
        prev.next =node
        this.size++
       }
    }

    removeValue(value){
        if(this.size == 0){
           return console.log("the list is empty");
        }
        if(this.head.value == value){
            this.head =this.head.next
            this.size--

        }else{
            let prev =this.head
            let removeIndex
            while(prev.next && prev.next.value !== value){
                prev =prev.next
            }
        if(prev.next){
            removeIndex = prev.next
            prev.next = removeIndex.next
            this.size--
            return removeIndex.value
        }
        return null
        }

    }

   printMiddle(){
    if(this.isEmpty()){
       return console.log("The list is empty")
    }
   let middle = Math.floor(this.size/2)
   let currentNode = this.head
     for (let i = 0; i < middle; i++) {
     currentNode = currentNode.next
        
     }
     return console.log("Middle value",currentNode.value)
   }  
   
   print(){
    if(this.isEmpty()){
        console.log("The list is empty")
        return
    }else{
        let curr = this.head
        let listValues =""
        while(curr){
            listValues += `${curr.value}  `
            curr = curr.next
     
        }
        console.log(listValues)
    }
   }

   removeMiddle(){
    if(this.size < 0 ){
        return null
    }else{
        let middle = Math.floor(this.size/2)
        let prev = this.head
        let removeIndex
        for(let i =0 ;i< middle -1 ;i++){
            prev =prev.next
        }
         removeIndex = prev.next
        prev.next = removeIndex.next
        this.size--
        return removeIndex.value
    }
    
    
   }
}

let list = new LinkedList()
list.append(5)
list.append(6)
list.append(7)
list.printMiddle()
list.prepend(3)
list.insert(4,1)
console.log(list.getsize());
list.removeMiddle()
list.removeValue(6)
list.print()