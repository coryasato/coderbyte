/*
  Converts num's base (radix) to binary.  Modulus 10 will result in either 1 or 0, the former
  being a Prime Number.

  NOTE: "A Prime Number is a natural number greater than 1 that has no positive divisors other 
         than 1 and itself."
*/

function PrimeTime(num) {
  return num === 2 || num.toString(2) % 10 === 1 ? true : false;
}


// console.log(PrimeTime(19));  // true
// console.log(PrimeTime(110)); // false