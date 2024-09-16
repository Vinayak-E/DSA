function quick(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left =[]
    let right =[]
    for(let i= 0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}
let arr = [3,5,2,4,6,7,342,2,2,4,5,-8]
console.log(quick(arr));


// 1. Average Case Time Complexity:
// O(n log n)
// This occurs when the pivot divides the array into relatively equal parts in each recursive call, resulting in logarithmic recursion depth and linear work per depth.
// 2. Worst Case Time Complexity:
// O(n²)
// This happens when the pivot consistently divides the array into highly unbalanced parts, such as when the array is already sorted or reverse sorted and the pivot is always the smallest or largest element. In this case, the recursion depth becomes linear, and the work done at each level is linear, leading to quadratic complexity.

// 3. Best Case Time Complexity:
// O(n log n)
// The best case occurs when the pivot always divides the array into two equal halves, leading to the most efficient partitioning.

// 4. Space Complexity:
// O(log n) (in-place sorting using recursion)