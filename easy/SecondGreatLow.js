/*
  1. Sort the array lowest to highest numbers.
  2. Return the second and second to last indexes of the array.
*/
function SecondGreatLow(arr) {
  arr.sort(function(x, y) { return x - y; });
  
  return arr[1] + " " + arr[arr.length - 2];
}