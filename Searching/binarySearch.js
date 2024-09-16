function binarySearch(arr,target) {
    let left = 0 
    let right = arr.length-1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] == target){
            return mid
        }else if(target < arr[mid]){
            right  = mid -1
        }else{
            left = mid + 1
        }
    }
    return -1
}



let arr =[1,2,3,4,5,65,66,77]
console.log(binarySearch(arr,66));  
// output 6