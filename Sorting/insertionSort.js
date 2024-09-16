function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let current = arr[i]
        let j = i-1

        while( j>=0 && arr[j] > current){
            arr[j+1]= arr[j]
            j--
        }
        arr[j+1]=current
    }
    return arr
}
let arr = [2,3,5,9,32,-1,3]
console.log(insertionSort(arr));

// Time Complexity = O(n^2)
// Space Complexity = O(1) 