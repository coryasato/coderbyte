function TimeConvert(num) {
  var hours = Math.floor(num / 60);
  var mins = num % 60;
  
  return hours + ":" + mins;
}

// Appending a zero to the end using numbers and Math.

function nLength(n) { 
    return (Math.log(Math.abs(n+1)) * 0.43429448190325176 | 0) + 1; 
}

function TimeConvert(num) {
  var hours = Math.floor(num / 60);
  var mins = num % 60;
  var len = nLength(mins);
  
  return (len === 1) ? hours + ":" + mins + 0 : hours + ":" + mins;
}