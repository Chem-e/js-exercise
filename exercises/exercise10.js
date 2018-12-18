/**
 * Given two input strings, write a function to find largest identical substring
 * For example:
 * String
 * Spring
 * Here the largest substring is 'ring'
 *
 * In case there are multiple largest substrings of similar length, the function must return the first largest substring found w.r.t first string, For example:
 * hirespring
 * ringfhire
 * Here, the largest substring returned will be 'hire' and NOT 'ring'
*/
function largestSubstring(str1, str2) {
	// return '';
	match = 0;
	string1 = str1.length
	 for(var i=0; i<str1.length; i++){
	  substring=0;
	   for(var j=0; j<i+1; j++){
		re = new RegExp("(?:.{" + substring + "})(.{" + string1 + "})", "i");
		temp = re.test(str1);
		re = new RegExp("(" + RegExp.$1 + ")", "i");
		if(re.test(str2)){
		  match=1;
		  result = RegExp.$1;
		  break;
		}
		substring = substring + 1;
		}
		if(match==1){
			return result; 
			break;
		}
	   string1 = string1 - 1;
	  }
	 result = "";
	 return result;
	}
