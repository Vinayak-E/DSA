class MinBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(value){
        this.values.push(value)
        this.bubbleUp()
    }


    bubbleUp(){
        let idx = this.values.length-1
        let element = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]

            if(element >= parent) break;

            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
}


let heap = new MinBinaryHeap()

heap.insert(55)

heap.insert(5)
heap.insert(555)
console.log(heap);