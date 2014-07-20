function Palindrome(str) { 
  return str === str.split('').reverse().join('') ? "true" : "false"; 
}