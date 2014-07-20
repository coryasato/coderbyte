function SimpleAdding(num) {
  var sum = 0;

  for(var i = 0; i < num; i++) {
    sum += (i + 1);
  }
  return sum;
}


function SimpleAdding(num) {
  var count = [];
  
  for(var i = 0; i < num; i++) {
    count.push(i + 1);
  }
  
  return count.reduce(function(a,b){
    return a + b;
  });
}