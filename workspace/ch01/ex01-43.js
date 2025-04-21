/*
나머지 매개변수(Rest parameters)
*/

function fn(...args) {
  console.log(args);
  for (let arg of args) {
    console.log(arg);
  }
}

fn();
fn(1);
fn(1, 2);
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
