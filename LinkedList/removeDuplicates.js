class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.size =0
        this.head = null
        this.tail =null
    }
   
    isEmpty(){
        return this.size == 0
    }

append(value){
    let node = new Node(value)
    if(this.isEmpty()){
        this.head = node
        this.tail = node
    }else{
        this.tail.next = node
        this.tail =node
    }
    this.size++


}
    removeDuplicates(){

        if(this.isEmpty()){
            return console.log("The list is Empty");
        }
        let curr = this.head
        let prev = null
        let seenValues = new Set()
        while(curr){
            if(seenValues.has(curr.value)){
                prev.next =curr.next
                this.size--
                if (curr === this.tail) {
                    this.tail = prev;
                }


            }else{
                seenValues.add(curr.value)
                prev = curr
            }
            curr = curr.next

        }
        
    }

    print(){
        let curr = this.head
        let listValues =""
        while(curr){
            listValues += ` ${curr.value} >>`
            curr=curr.next
        }
        console.log(listValues);
    }
}

let list = new LinkedList()

list.append(1)
list.append(1)
list.append(2)
list.append(2)
list.removeDuplicates()
list.append(3)
list.append(3)
list.removeDuplicates()
list.print()