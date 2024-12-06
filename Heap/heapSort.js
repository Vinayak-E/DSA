class Heap{
    constructor(){
        this.items =[]
        
    }
    
    
    insert(value){
        this.items.push(value)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.items.length -1
        let element = this.items[idx]
        
            while(idx >0){
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.items[parentIdx]
            if(element<= parent)break
            this.items[parentIdx] = element
            this.items[idx ] = parent 
            idx = parentIdx
        }
    }
    
    remove(){
        if(this.items.length == 0)return null
                    let max = this.items[0]
            let end = this.items.pop()

        if(this.items.length >  0){
            this.items[0] = end
            this.bubbleDown()
        }
        return max

    }
    bubbleDown(){
        let idx =0
        let length = this.items.length
        let element = this.items[idx]
        while(true){
        let leftChild,rightChild
            let swap = null
            let leftChildIdx = 2 * idx +1
            let rightChildIdx = 2 * idx + 2
            if(leftChildIdx < length){
                leftChild = this.items[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }
            
            if(rightChildIdx < length){
                rightChild = this.items[rightChildIdx]
                
                if((swap !== null && rightChild > leftChild)|| (swap === null && rightChild > element)){
                    swap = rightChildIdx
                }
            }
            
            
            if(swap === null)break
            this.items[idx] =this.items[swap]
            this.items[swap] = element
             idx =swap
        }
    }
    
    
    
    
    display(){
        console.log(this.items)
    }
    
    heapSort(){
        let arr =[]
        let copy = [...this.items]
        while(this.items.length > 0){
            arr.push(this.remove())
        }
        this.items = copy
        
        return arr
    }
}

const heap = new Heap()
heap.insert(533)
heap.insert(25)
heap.insert(15)
heap.insert(53)
heap.insert(54)

console.log('Sorted array',heap.heapSort())
heap.display()