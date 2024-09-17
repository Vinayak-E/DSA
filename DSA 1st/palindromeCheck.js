function isPalindrome(arr){
    if(arr.length <= 1){
  return true
    }
    if(arr[0] != arr[arr.length -1]){
        return false
    }
    return isPalindrome(arr.slice(1,-1))

}

console.log(isPalindrome(arr=[1,2,4,4,2,1]));


function isPalindromeStr(str) {
  
    if (str.length <= 1) {
      return true;
    }
  
    
    if (str[0] !== str[str.length - 1]) {
      return false; 
    }
  

    return isPalindromeStr(str.slice(1, -1));
  }
  

  console.log(isPalindromeStr("madam")); // true
  console.log(isPalindromeStr("hello")); // false
  