function FirstReverse(str) {
  return str.split('').reverse().join('');
}
 


// ~iterative
function FirstReverse(str) {
  var newStr = [];
  
  for(var i = 0, len = str.length; i <= len; i++) {
    newStr.push(str.charAt(len - i));
  }
  
  return newStr.join('');
}
 


// ~recursive
function FirstReverse(str) {
  return (str === '') ? '' : FirstReverse(str.substr(1)) + str.charAt(0);
}