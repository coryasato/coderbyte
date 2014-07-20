// ~iterative
function FirstFactorial(num) {
  var n = 1;

  for(var i = 0; i < num; i ++) {
    n *= (i + 1);
  }
  return n;
}



// ~recursive
function FirstFactorial(num) {
  return (num <= 1) ? 1 : FirstFactorial(num - 1) * num;
}