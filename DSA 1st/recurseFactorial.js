function recurseFactorial(n) {
    if(n == 0){
        return 1 
    }
    return n * (recurseFactorial(n-1))
    
}

console.log(recurseFactorial(4));