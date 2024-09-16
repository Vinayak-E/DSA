
function prime(n){
    if(n < 2){
        return false
    }
    for (let i = 2; i < n; i++) {
       if( n % i == 0){
        return false
       }
        
    }
    return true
}


console.log(prime(7));

// function prime(n){
//     if(n < 2){
//         return false
//     }
//     for(let i = 2;i <n ;i++){
//         if(n % i == 0){
//             return false
//         }
//     }
//     return true
// }

// function isprime(arr){
//     for(let i=0;i<arr.length;i++){
//        if( prime(arr[i])){
//         console.log(arr[i]);
//        }
//     }
// }

// console.log(prime(8));
// let arr =[1,2,3,4,5,6,7]
// isprime(arr)