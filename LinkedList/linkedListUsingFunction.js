function Node(value){
    this.value = value
    this.next = null
}

function LinkedList(){
    this.head = null
    this.size = 0
    
    this.add = function(value){
        let node = new Node(value)
        if(this.head === null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    this.print = function(){
        let current = this.head
        let values =''
        while(current){
            values +=  `${current.value} => `
            current= current.next
            
        }
        return console.log(values)
    }
    
    this.remove = function(value){
        if(this.head.value == value ){
            this.head = this.head.next
        }else{
            let current = this.head
            while(current.next && current.next.value !== value){
                current = current.next
                
            }
            current.next = current.next.next
        }
    }
    
    this.removeOdd = function(){
        while(this.head.value % 2 !==0 && this.head.next) {
            this.head = this.head.next
            this.size--
            
        }
        
        let current = this.head
        while(current && current.next ){
            if(current.next && current.next.value % 2 !==0 ){
                  current.next = current.next.next
                  this.size--
            }else{
                
            current = current.next
            }
          
        }
    }
}


let list = new LinkedList()
list.add(11);
list.add(13);
list.add(20);
list.add(30);
list.add(47);
list.add(70);
list.add(81);
list.removeOdd()

list.print(); 