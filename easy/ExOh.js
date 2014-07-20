function ExOh(str) {
  str.split('');
  var x = str.match(/x/gi).length;
  var o = str.match(/o/gi).length;
  
  return x === o ? "true" : "false"; 
}