/*
  1. We're interested in the letters of str2, so our counter will be on its length.
  2. len-- is a quick decrement on our length variable.  Meaning it'll decrement with each pass of the loop
     til either false is called or length === 0.
  3. Getting the index of the letter in str1 by the character value in str2 at our loops current iteration.
     If the letter doesn't exist in str1 then indexOf will result in -1.
  
  **Note: indexOf() is case sensitive; Our function does not protect against this atm.  We can easily add this
          in with toLowerCase() checks.
*/

function StringScramble(str1, str2) {
  var len = str2.length,                    // 1
      char;
  
  while(len--) {                            // 2
    char = str1.indexOf(str2.charAt(len));  // 3
    
    if (char === -1) {
      return false;
    }
  }
  
  return true;
}

//console.log(StringScramble("wodkqorld", "world")); // true
//console.log(StringScramble("h3llko", "hello")); // false