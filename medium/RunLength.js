/*
  Our regular expression is caputuring a one word character by the number of times it occurs from
  0 or more times.  The p1 argument is our $1 capture group.
*/

function RunLength(str) {
  return str.replace(/(\w)\1*/g, function(p1, match) {
    return p1.length + match;
  });
}

//console.log(RunLength("wwwbbw")); // 3w2b1w