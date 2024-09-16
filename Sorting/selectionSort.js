function selectionSort(arr){

for(let i =0;i<arr.length;i++){
    let lowest  = i
    for(let j =i +1;j<arr.length;j++){
        if(arr[j] < arr[lowest]){
            lowest = j
        }
    }
    if(lowest != i){
        let temp = arr[i]
        arr[i] =arr[lowest]
        arr[lowest] =temp
    }
}
return arr

}

let arr = [6,4,3,7,22,4,1,23,3]
console.log(selectionSort(arr));

// Time Complexity: = O(n²)
// O(log n) (in-place sorting using recursion)