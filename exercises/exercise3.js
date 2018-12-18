/*
 *  Define a function reverse() that computes the reversal of a (full) string. For example,
 *  reverse("jag testar") should return the string "ratset gaj".
 */

var reverse = function(words) {
    var reversedWord="";
    for (var i=words.length-1 ; i>=0 ; i--){
        reversedWord+=words[i];
    }
    
    return reversedWord;
};
