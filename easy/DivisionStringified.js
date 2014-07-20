/*
  1. Divide the numbers, round it and convert it to a String.
  2. Replacing the string with our queried regex. 
*/
function DivisionStringified(num1, num2) {
  //1
  var result = Math.round(num1 / num2).toString();
  //2
  return result.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

console.log(DivisionStringified(123456789, 10000));