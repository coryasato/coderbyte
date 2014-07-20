function SimpleSymbols(str) {
  return (/^((\+[a-z])*\+|=)+$/gi).test(str);
}

function SimpleSymbols (str) {
  var letter = str.match(/[a-z]/gi);
  var match = str.match(/\+[a-z]\+/gi);
  
  if (! str.length || ! match) {
    return false;
  }
  
  return letter.length === match.length;
  
}