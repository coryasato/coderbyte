/*
  NOTE: "A Prime Number is a natural number greater than 1 that has no positive divisors other 
         than 1 and itself."
*/

function PrimeTime(num) {
  if (num % 2 === 0) return false;
    for(var i = 3; i <= Math.sqrt(num); i = i + 2) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
}


// console.log(PrimeTime(19));  // true
// console.log(PrimeTime(110)); // false