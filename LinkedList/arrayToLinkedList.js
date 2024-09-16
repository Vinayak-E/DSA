class Node{
    constructor(value){
        this.value =value
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
        return this.size == 0
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
          this.head =node
          this.tail = node
        }else{
            this.tail.next  = node
            this.tail =node
        }
        this.size++
        
    }

    arrayTolist(arr){
        for(let i =0 ;i<arr.length;i++){
            this.append(arr[i])
        }
    }


    arrayTolist2(arr){
        this.head = new Node(arr[0])
        let currentNode = this.head
        for(let i=1;i<arr.length;i++){
             let newNode = new Node(arr[i])
             currentNode.next = newNode
             currentNode = newNode
             this.size++


        }
       
        this.tail = currentNode

    }

    stringTolist(str){
        for(let char of str){
            this.append(char)
        }
    }

    print(){
        let curr = this.head
        let listValues =""

        while(curr){
            listValues += `${curr.value} ->`
            curr = curr.next
        }
        console.log(listValues);
    }
}

let list = new LinkedList()
let arr = [1,2,3,4,5]

list.arrayTolist2(arr)
let str = "vinayak"
list.stringTolist(str)
list.print()