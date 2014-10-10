/**
 * Sort array numerically;  Count the spread then subtract the initial amount in array.
 */

function Consecutive(arr) {
  arr = arr.sort(function(a, b) { return a - b; });
  var count = 0;
  var arrLen = arr.length;

  for(var i = arr[0]; i <= arr[arrLen - 1]; i++) {
    count++;
  }
  return count - arrLen;
}

// console.log(Consecutive([5, 10, 15]));  // 8
// console.log(Consecutive([-2, 4, 10]));  // 10