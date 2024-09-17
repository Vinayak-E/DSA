function isValidParentheses(str) {
    const stack = [];
    const matchingPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {

        if (char in matchingPairs) {
            stack.push(char);
        } 

        else if (stack.length > 0 && matchingPairs[stack[stack.length - 1]] === char) {
            stack.pop();
        } 

        else {
            return false;
        }
    }


    return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("(){}[]"));  // true
console.log(isValidParentheses("({[)]}"));  // false
console.log(isValidParentheses("({[]})"));  // true
