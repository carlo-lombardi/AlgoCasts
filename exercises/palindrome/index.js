// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let re = /[W_]/g;
  let lowRe = str.replace(re, "");
  let revereString = lowRe.split("").reverse().join("");
  return revereString === lowRe ? true : false;
}
module.exports = palindrome;
