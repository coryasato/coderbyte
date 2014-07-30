/*
  Get divisibles of both our numbers if both are divisibles at that index.  
  We could sort the array, but since we're incrementing the last value should be the largest.
*/

function Division(num1, num2) {
  var divisors = [];
  
  for(var i = 1; i <= num1; i++) {
    if(num1 % i === 0 && num2 % i === 0) {
      divisors.push(i);
    }
  }
  
  return divisors.pop();
}

// console.log(Division(12, 16));  // 4
// console.log(Division(36, 54));  // 18