function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
  if(arr[i] === target ){
    return i
  }
     }
     return -1
}

let arr =[1,2,3,45,6,7]
let result =linearSearch(arr,45)

console.log(result);

// O(n) Time complexity
// O(1) Space comlexity