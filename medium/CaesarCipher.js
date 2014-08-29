/*
  Using ASCII character codes and incrementing by our num argument,
  we shift each letter num characters and get the letter from that sum.
*/

function CaesarCipher(str, num) {
  return str.replace(/(\w)/gi, function(letter) {
    var shift = String.fromCharCode(letter.charCodeAt(0) + num);
    return shift;
  });
}

//console.log(CaesarCipher("Hello!", 4));         //Lipps!
//console.log(CaesarCipher("Caesar Cipher", 2));  //Ecguct Ekrjgt