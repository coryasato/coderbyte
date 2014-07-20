function VowelCount(str) {
  var vowels = (/[aeiou]/gi);
  
  return str.match(vowels).length;
}