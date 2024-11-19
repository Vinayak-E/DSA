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
    
    remove(index){
        if(index == 0){
            this.head = this.head.next
        }else{
            let current = this.head
            for(let i =0;i< index-1;i++){
                current = current.next
            }
            current.next = current.next.next
            
        }
        this.size--
    }
 
 
 sorting(){
     if(!this.head || !this.head.next)return
     let swapped
     do{
         swapped =  false
         let current = this.head
         while(current.next){
             if(current && current.next.value > current.value){
             let temp = current.value
             current.value = current.next.value
             current.next.value = temp
             swapped = true
             }

                 current = current.next   
         }
  
         
     }while(swapped)
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
list.sorting()
list.print()