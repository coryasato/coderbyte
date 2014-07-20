/*
  1. Iterate summing up the values for the mean.
  2. Build an object storing the values and the number of their occurances.
  3. Using count as a base, the loop will stop at the highest occurance.  The key of that 
     value is our mode.
  4. The sum divided by the length of values is our mean.
*/

function MeanMode(arr) { 
  var counter = {}, mean = 0, count = 1, mode;
  //1
  for(var i = 0; i < arr.length; i++) {
    mean += arr[i];
  //2  
    counter[arr[i]] = (counter[arr[i]] || 0) + 1;
  //3  
    if(counter[arr[i]] > count) {
      count = counter[arr[i]];
      mode = arr[i];
    }
  }
  //4 
  mean = Math.floor(mean / arr.length);
  
  return mean === mode ? 1 : 0;
}

// console.log(MeanMode([1,3,3,3,5]));
// console.log(MeanMode([1, 2, 2, 6]));