class MaxHeap{
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
            let parentIdx =  Math.floor((idx - 1)/2)
            let parent  = this.values[parentIdx]
            if(element <= parent)break;
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    removeMax(){
        let max = this.values[0]
        let end = this.values.pop()
        this.values[0] = end 
        this.bubbleDown()
        return max
    }

    bubbleDown(){
        let idx = 0
        let element = this.values[0]
        let  length = this.values.length
        while(true){
            let rightChildIdx = 2 * idx + 2
            let leftChildIdx = 2 * idx + 1
            let leftChild,rightChild
            let swap = null
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx  < length){
                let rightChild = this.values[rightChildIdx]
                if((swap === null &&  rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx

                }
            }
            if(swap === null)break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

    heapSort() {
        let sortedArray = [];
        while (this.values.length > 0) {
            sortedArray.push(this.removeMax());
        }
        return sortedArray.reverse(); 
    }
}


let heap = new MaxHeap()
heap.insert(9)
heap.insert(2)
heap.insert(433)
heap.insert(43)
heap.insert(4)
heap.insert(66)
heap.insert(7)
console.log(heap)
let sorted = heap.heapSort();
console.log("Sorted array using Heap Sort:", sorted);