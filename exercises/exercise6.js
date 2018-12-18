/*
 *  DWrite a JavaScript program t[o validate a date in dd/mm/yyyy format. If the user input matches with
 *  the format, the program will return a message "Valid Date" otherwise return a message "Invalid Date!"
 */



var checkDate = function (form) {
  var patt = new RegExp(/([0][1-9]|[1|2][0-9]|[3][0|1])[/]([0][1-9]|[1][0-2])[/]([1-9][0-9]{3}$)/);
  var userInput;
      if (patt.test(form) ===true) {
          return "Valid Date";
      }
      else {
          return "Invalid Date!";
      }
};
















































