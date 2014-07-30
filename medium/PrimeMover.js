/*
  Can we calculate using our num as an iterator and base case?
*/

function PrimeMover(num) {
  var primes = [2];
  
  for(var i = 3; i <= 10^4; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  
  function isPrime(n) {
    if (n % 2 === 0) return false;
    for(var i = 3; i <= Math.sqrt(n); i = i + 2) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  return primes[num-1];
}

// console.log(PrimeMover(9));  // 23
// console.log(PrimeMover(100));  // 541