
function bubbleSort(arr){
    let swapped 
 
    do{
        swapped = false
        for(let i= 0;i< arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped =true
            }
        }
    }while(swapped)
    return arr
}

let arr = [5,2,-3,99,-5,5,34,3,6,77,1,0]

console.log(bubbleSort(arr));

// Time Complexity = O(n^2)- Quadratic       
// Space Complexity =O(1)                                                     