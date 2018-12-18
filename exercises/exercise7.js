/*
 *  Write a JavaScript function that accepts a string as a parameter and converts the first letter
 *  of each word of the string in upper case.
 */



var upperCase = function(word) {
  return word.replace(/\w\S*/g, function(str) {
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        });
};




















