/*
  Replace all characters that is not a-z or A-Z.
  Equality check if the string reversed is the same as the original.
*/

function PalindromeTwo(str) {
  str = str.replace(/[^a-z]/gi, "");
  
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase(); 
}

// console.log(PalindromeTwo("Noel - sees Leon"));  //true
// console.log(PalindromeTwo("A war at Tarawa!"));  //true