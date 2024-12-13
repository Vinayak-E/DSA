class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.size = 0
        this.head = null
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
    }

    display(){
        let current = this.head
        let values =''
        while( current){
            values += `${current.value} => `
            current = current.next

        }
        return console.log(values)
    }
}

const list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(3)
const list2 = new LinkedList()
list2.append(4)
list2.append(5)
list2.append(6)

function mergeLists(list1,list2){
    let current = list1.head
    while(current.next){
       current = current.next
    }
    current.next = list2.head

    return list1.head
}
mergeLists(list1,list2)
list1.display()