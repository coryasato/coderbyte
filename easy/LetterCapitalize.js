function LetterCapitalize(str) { 
  return str.replace(/\b\w/g, function(letter) {
    return letter.toUpperCase();
  });
}