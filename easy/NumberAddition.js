/*
  1. Regexp to create an array of numbers from the string.
  2. Reduce() to sum up the numbers calling parseInt() on each value 
     returning integers.  We pass 10 as the radix.

  *Note: Regex means any digit with 1 or more globally.
*/

function NumberAddition(str) { 
  var nums = str.match(/\d+/g);
  
  return nums.reduce(function(a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
  });
}