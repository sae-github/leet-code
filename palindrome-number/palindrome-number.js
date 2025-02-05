// Given an integer x, return true if x is a palindrome, and false otherwise.
// palindrome 回文判定

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const reverseStr = [...String(x)].reverse().join('')
    return x.toString() === reverseStr
};

console.log(isPalindrome(121))