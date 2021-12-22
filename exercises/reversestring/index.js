// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((pre, curr) => curr + pre, "");
}

module.exports = reverse;

// function reverse(str) {
//   return str.split("").reverse().join("");
// } solucion 1

// function reverse(str) {
//   let reversed = "";
//   for (let iterator of str) {
//     reversed = iterator + reversed;
//   }
//   return reversed;
// } solucion 2
