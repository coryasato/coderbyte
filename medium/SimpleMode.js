/*
  1. Build up an object with the array values as properties and the number of times they occur
     as object values.
  2. We loop over those values and stop at the largest occurance.  We pass that property name over
     to our mode variable calling parseInt() to revert back into a number (no quotes).
  3. Mode is only defined if there are duplicates, else its undefined / !mode.
*/

function SimpleMode(arr) {
  var freq = {},
      count = 1,
      mode;
  
  for(var i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1; //1
  }
  
  for(var f in freq) {
    if(freq[f] > count) {                   //2
      count = freq[f];
      mode = parseInt(f);
    }
  }
  
  return !mode ? -1 : mode;                 //3
}

//console.log(SimpleMode([5,10,10,6,5]));  //5
//console.log(SimpleMode([5,10,6]));       //-1