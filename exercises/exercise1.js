/*
 * Write a function findLongestWord() that takes an array of words and returns the length of the longest word.
 *
 */


var findLongestWord = function (words) {

    var longestWord = '';
    words.forEach(function (element) {
      if (longestWord.length < element.length) {
        longestWord = element;
      }
    });

    return longestWord.length;

};
