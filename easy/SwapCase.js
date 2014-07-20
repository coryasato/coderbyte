/*
  1. Create an array of letters.
  2. Regexp test on lowercase letters is true.  Swap lowercase at letter index toUpperCase().  
  3. If not the rest of the letters are uppercase values.  Call toLowerCase() on letters.
  4. Join the array to a string value.

  *Note: Numbers or symbols are not affected.
*/

function SwapCase(str) {
  str = str.split('');
  
  for(var i = 0; i < str.length; i++) {
    if((/[a-z]/g).test(str[i])) {
        str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  return str.join('');
}
