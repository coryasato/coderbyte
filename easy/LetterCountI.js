/*
  1. Split the string by whitespace. Setup our vars outside of our loops for cleaner
     performance.
  2. Loop through our array to get each word and store in words variable.
  3. Loop through the words and store each letter in a RegExp object.
  4. Match()ing those letters against their words and placing each in its own array.
     So multiple letters will tally in their array only if they belong to the word.
     The RexExp is looking for itself specifically.
     "Hello" => [H]     [1]
                [e]     [1]
                [l,l]   [2]
                [l,l]   [2]
                [o]     [1]
     Calling length on this gets us the number value of repeated letters ala length 
     of the arrays.
  5. If any charLen is larger than 1, largest is that number which is our answer.
  6. If our answer is less than 2 than return -1.  Else return our word.
*/

function LetterCountI(str) {
  //1
  str = str.split(' ');
  var word, words, characters, charLen, largest = 1;
  //2
  for (var i = 0; i < str.length; i++) {
    words = str[i];
  //3
    for (var j = 0; j < words.length; j++) {
      characters = new RegExp(words[j], 'g');
  //4
      charLen = words.match(characters).length;
  //5    
      if(charLen > largest) {
        largest = charLen;
        word = words;
      }
    }
  }
 //6 
  return largest < 2 ? -1 : word;
}

// console.log(LetterCountI("Hello apple pie"));
// console.log(LetterCountI("No words"));