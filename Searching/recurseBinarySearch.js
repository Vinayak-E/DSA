function recurseBinary(arr,target,left =0,right =arr.length -1) {
    if(left > right){
        return -1
    }
    let mid = Math.floor((left+right)/2)
    if(arr[mid] == target ){
        return mid
    }
    return (target < arr[mid]) ? recurseBinary(arr,target,left,mid-1):recurseBinary(arr,target,mid+1,right)
    
}




let arr =[1,2,3,4,5,65,66,77]
console.log(recurseBinary(arr,66));  
// output 6