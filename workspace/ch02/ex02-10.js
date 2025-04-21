/*
  함수 생성 4 (화살표 함수 표현식)
*/

// 기존 함수
const add = function (x, y) {
  return x + y;
};

// 화살표 함수
add = (x, y) => {
  return x + y;
};

// 화살표 함수 축약 중괄호 생략
add = (x, y) => x + y;

// 기존 함수
const add10 = function (x) {
  return x + 10;
};

// 화살표 함수
add10 = (x) => {
  return x + 10;
};
// 화살표 함수 축약
add10 = (x) => x + 10;
