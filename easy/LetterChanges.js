function LetterChanges(str) {
  return str.replace(/\w/g, function(letter) {
    var next = String.fromCharCode(letter.charCodeAt(0)+1);
    if(/[aeiou]/gi.test(next)) next = next.toUpperCase();
    return letter === 'Z' ? 'A' : letter === 'z' ? 'A' : next;
  });
}