        //sum

function sum1(n){
    let sum = 0
    for(let i = 0;i<=n ;i++){
        sum = sum + i

    }
    return sum
}
// console.log(sum(10))
//So Total Time Complexity is O(n) -- Linear Time Complexity


function sum2(n){
    return (n*(n+1))/2
}

// console.log(sum2(10))
// The space Complexity is O(1) -- Constant Time Complexity
//So Total Time Complexity is O(1) -- Constant Time Complexity


                // Find pair

function findPair1(arr,target){
    for(let i =0 ;i<arr.length;i++){
        for(let j= i+1;j< arr.length;j++){
            if(arr[i] + arr[j] == target){
                return [arr[i],arr[j]]

            }
        }
    }
    return[0,0]
}
let arr =[1,2,3,4]
// console.log(findPair1(arr,6));
// Time Complexity is O(n2) T
// Space Complexity is O(1) S


function findPair2(arr,target){
    let set =[]
    for(let i =0;i<arr.length;i++){
        set.push(i)
        if(set.includes(target - arr[i])){
            return [target - arr[i],arr[i]]
        }
    }
}

// console.log(findPair2(arr,5));
// Here the Time Complexity is O(n)
//Space Complexity is 0(n)


function findPair3(arr, target) {
    let set = new Set();
  
    for (let num of arr) {
      if (set.has(target - num)) {
        return [target - num, num];
      }
      set.add(num);
    }
  }
// console.log(findPair3([1,3,6,7],8))
// Here the Time Complexity is O(n)
//Space Complexity is 0(n)


          // targetToLast

function targetToLast(arr,target){
    let occurencies = arr.filter((num)=> num === target)
    let nonOccurencies = arr.filter((num)=> num!= target)
    return nonOccurencies.concat(occurencies)


}

// console.log(targetToLast([1,2,3,4,45,5],45))

// Time is O(n)
//space complexity is O(n  )


       //    Fibonacci

    function fibonacci(num){
        let arr =[0,1]
        for(let i = 2 ;i < num;i++){
            arr[i] = arr[i -1] + arr[i - 2]
        }
        return arr
    }

    // console.log(fibonacci(5))
    // Time is O(n)
   //space complexity is O(n)

    function reccurseFibonacci(num){
        if( num < 2){
            return num
        }else{
            return reccurseFibonacci(num - 1) + reccurseFibonacci(num - 2)
        }
    }

    // console.log(reccurseFibonacci(5));
//   Time complexity: O(2^n) (exponential)
// Space complexity: O(n)


function reccurseFibonacci(num, arr=[0,1]){
    if( num <= arr.length){
        return arr
    }else{
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return reccurseFibonacci(num,arr)
    }
}

// console.log(reccurseFibonacci(5));
//   Time complexity: O(2^n) (exponential)
// Space complexity: O(n)


                //  Factorial


    function factorial(num){
       
        let res =1
        for(let i = 2;i<=num;i++){
            res = res * i
      
        }
        return res
    }
       
    // console.log(factorial(4))      
   //Time complexity is linear O(n)
  // Space Complexity is cosntant O(1)

   function recurseFactorial(num){
   if(num == 0){
          return 1
   }
   return num * recurseFactorial(num-1)
   }


//    console.log(recurseFactorial(4));


    // Prime Number
    
    function prime(num){
        if(num < 2){
            return false
        }
        for(let i = 2;i< num;i++){
            if(num % i ==0){
                return false
            }
        }
        return true
    }

    // console.log(prime(8));
    //Time complexity is linear O(n)
  // Space Complexity is cosntant O(1)


               // Linear search

     function linearSearch(arr,target){
        for(let i = 0;i<arr.length;i++){
            if(arr[i]==target){
                return i
            }
        }
        return -1
     }


    // console.log(linearSearch(arr,4))
     //Time Complexity O(N)


                    //Binary Search

          function binarySearch(arr, target) {
            let left = 0;
            let right = arr.length - 1;
            while (left <= right) {
              let middle = Math.floor((left + right) / 2);
              if (arr[middle] == target) {
                return middle;
              } else if (target > arr[middle]) {
                left = middle + 1;
              } else {
                right = middle - 1;
              }
            }
            return -1;
          }
        //   console.log(binarySearch(arr, 3));
       //The Time complexity of this is O(log n)
  

   function recurseBinary(arr,target,left =0 ,right = arr.length-1){
    if(left > right){
        return -1
    }
    let middle = Math.floor((left + right) / 2);
    if(arr[middle] == target){
        return middle
    }else{
        return target > arr[middle] ? recurseBinary(arr,target,left= middle+1,right) : recurseBinary(arr,target,left,right = middle -1) 
    }

   } 
// console.log(recurseBinary(arr,4))   
//The time complexity of this is O(log n)


//  Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

function reverseString(str) {
    if (str === "") {
      return "";
    } else return reverseString(str.substr(1)) + str.charAt(0);
  }
  
  // console.log(reverseString("hello")); => olleh