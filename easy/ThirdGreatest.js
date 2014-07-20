/*
  1. Sort the array by the length of each value in reverse order.  Grab the third item in 
     the array.
*/

function ThirdGreatest(strArr) {  
  strArr = strArr.sort(function(a, b) {
    return b.length - a.length;
  });
  
  return strArr[2];
}