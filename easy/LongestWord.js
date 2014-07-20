function LongestWord(sen) {
  var words = sen.match(/\w+/gi);
  
  var sorted = words.sort(function(a, b) {
    return b.length - a.length;
  });
  
  return sorted[0];
}