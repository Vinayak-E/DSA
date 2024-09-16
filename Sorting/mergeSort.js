function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

     let mid = Math.floor(arr.length/2)
     let leftArr = arr.slice(0,mid)
     let rightArr = arr.slice(mid)
 
    return merge(mergeSort(leftArr),mergeSort(rightArr))

}

function merge(leftArr,rightArr){
    let sortArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(rightArr.shift())
        }
    }
    return[...sortArr,...leftArr,...rightArr]
}

let arr =[18,4,3,2,6,8,2,1]

console.log(mergeSort(arr));

// Time Complexity:a
// Best Case: O(n log n)

// Average Case: O(n log n)

// Worst Case: O(n log n)


// Space Complexity:
// O(n) due to the additional space used to hold the divided subarrays.