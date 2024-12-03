class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size =0
    }
    
    
    append(value){
        let node = new Node(value)
        if(this.head == null){
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
        if(this.head == null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    largest(){
        let current = this.head
        let largest = 0
        while(current){
            if(current.value > largest ){
                largest = current.value
               
            }
             current = current.next
        }
        
        return console.log(largest)
    }
    
    insert(index,value){
        if(index <0 || index > this.size){
            return false
        }
        let current = this.head
        let node = new Node(value)
        for(let i =0;i< index-1;i++){
           current = current.next 
        }
        node.next = current.next
        current.next = node
        this.size++
    }
    
    removeduplicates(){
        let seenValues =new Set()
        let current = this.head
        let prev = null
        while(current){
           if(seenValues.has(current.value)){
               prev.next =current.next
               this.size--
           }else{
               seenValues.add(current.value)
               prev= current
           }
           current = current.next
        }
    }
    
    
    removeDuplicates(){
        let seenValues = new Set()
        let duplicateValues = new Set()
        let current = this.head 
        let prev = null
        while(current ){
            if(seenValues.has(current.value)){
                duplicateValues.add(current.value)
                prev.next = current.next
            }else{
                seenValues.add(current.value)
                 prev = current
                
            }
            current = current.next
        }
        
         current = this.head
         
         prev = null
         while(current){
             if(duplicateValues.has(current.value)){
                 prev.next = current.next
                 this.size--
             }else{
                 prev = current
             }
               current = current.next
           
         }
   
    }
    
    display(){
        let current = this.head
        let str =''
        while(current){
            str += `${current.value} =>`
            current = current.next
            
        }
        console.log(str)
    }
    
    
}


let list = new LinkedList()

list.append(2)
list.append(4)
list.append(66)
list.append(6)
list.append(96)
list.prepend(775)
list.insert(4,888)
list.insert(5,888)
list.removeDuplicates()
list.insert(4,888)
list.append(6)
list.removeDuplicates()

list.display()
list.largest()

