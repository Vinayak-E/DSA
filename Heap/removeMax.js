class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(value){
        this.values.push(value)
        this.bubbleUp() 
    }

    bubbleUp(){
        let idx = this.values.length -1
        let element = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2)
            let parent = this.values[parentIdx]

            if(element  <= parent )break
                this.values[parentIdx] = element
                this.values[idx] = parent
                idx = parentIdx
            }
        } 

        removeMax(){
            const max = this.values[0]
            const end = this.values.pop() 
            this.values[0] =end
            this.bubbleDown()
            return max
        }

    bubbleDown(){
        let  idx = 0
        let length = this.values.length
        let element = this.values[0]


        while(true){
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild,rightChild
            let swap = null
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if((swap != null && rightChild > leftChild)||(swap === null && rightChild > element)){
                    swap = rightChildIdx
                }
            }

            if(swap === null)break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}


let heap = new MaxBinaryHeap()
heap.insert(4)
heap.insert(41)
heap.insert(8)
heap.insert(99)
heap.insert(6)
heap.insert(5)
heap.removeMax()

console.log(heap);