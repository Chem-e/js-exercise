/*
 *  Write a JavaScript function that checks whether a passed string is palindrome or not.
 */

var isPalindrome = function(word) {
  // function palindrome(str) {
    // var skip = /[\W_]/g;
    var sentence=word.toLowerCase().replace(' ', '');
    var reverseStr=sentence.split('').reverse().join('');
    return reverseStr===sentence;
};



