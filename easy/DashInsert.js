/*
  1. Convert number toString() then Array.
  2. We check if the current and next values are odd.
  3. Splice current index with a dash.  Array.splice(start position, number of elements to 
     remove, elements to add).
  4. Join the array.
*/

function DashInsert(num) {  
  num = num.toString().split('');
  
  for(var i = 0; i < num.length; i++) {
    if ((num[i] % 2) && (num[i+1] % 2)) {
      num.splice(i+1, 0, '-');
    }
  }
  
  return num.join('');
}