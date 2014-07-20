/*
  1. First half checks against negative numbers and 0.
     Second half is true when resulting in 0 or (num & (num - 1)) === 0.
*/
function PowersofTwo(num) {
  return ( num !== 0 ) && !( num & ( num - 1 ) );
}

/* 
  1. Convert num to base 2, interpret string as base 10. Modulus 9 to get 
     the digit sum which must be 1.
*/ 
function PowersofTwo(num) {
  return num.toString(2) % 9 === 1;
}

/*
  1. Using a loop, we check the values of (i up to num) to the power of 2 starting at 1.
*/
function PowersofTwo(num) {
  var i = 1;
  var power = Math.pow(2, i);
  
  while(power < num) {
    i++;
    power = Math.pow(2, i);
  }
  
  return (num === power) ? true : false;
}