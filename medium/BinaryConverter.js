/*
  Easy peesy.  2 is our radix.  Opposite would be Number.toString(2) to get binary.
*/

function BinaryConverter(str) {
  return parseInt(str, 2);
}

//console.log(BinaryConverter("100101")); // 37
//console.log(BinaryConverter("011"));    // 3