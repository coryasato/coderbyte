/*
  1. Sort the array a < b.
  2. Grab the largest value in the array and store it to compare against.  Array does NOT 
     contain this value any longer.  
  3. Iterate through the array adding each value up in our sum variable.  If any of these sums
     is equal to our largest variable, return true.
  4. If not, iterate again subtracting from the previously added sum checking against each
     passing value.
  5. No matching sum, return false.

  *Note: remove comments from the logs to see whats happening manually.  Very simple.
*/

function ArrayAdditionI(arr) {
  // 1
  arr.sort(function(a, b) { return a - b; });
  // 2
  var largest = arr.pop();
  var sum = 0;
  // 3
  for (var i = 0; i < arr.length; i++) { 
    sum += arr[i];
    // console.log("+ " + arr[i] + " = " + sum);
    if (sum === largest) {
      return true;
    }
  }
  // 4
  for (var j = 0; j < arr.length; j++) {
    // console.log("- " + arr[j] + " = " + (sum - arr[j]));
    if ((sum - arr[j]) === largest) {
      return true;
    }
  }
  // 5
  return false;
}

// console.log(ArrayAdditionI([5,7,16,1,2]));
// console.log(ArrayAdditionI([3,5,-1,8,12]));