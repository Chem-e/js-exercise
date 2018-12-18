/*
 *  Write a function filterLongWords() that takes an array of words and an integer i and returns the array
 *  of words that are longer than.
 */

var filterLongWords = function(words, i) {
 
   var array = words.filter(function(word) {
       return (word.length > i);
    });
    
     return array;
 };
 