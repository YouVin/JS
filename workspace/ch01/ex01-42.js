/*
기본값 매개변수(Default parameters)
*/

function sum(a, b) {
  if (b === undefined) {
    b = 0;
  }
  return a + b;
}

function sum(a, b) {
  b = b || 0;
  return a + b;
}

console.log(sum(10, 20));
console.log(sum(50));
