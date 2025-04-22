/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
*/

//window.name = "global"; // window, 브라우저가 가지고 있는 전역 객체
//global.name = "global"; // global, Node.js 가 가지고 있는 전역 객체
globalThis.name = "global"; // gobalThis, 모든 환경에서 가지고 있는 전역 객체

const getPingName = function () {
  return this.name;
};

const baro = new Object();
baro.name = "바로핑";
baro.age = 9;
baro.getName = getPingName;

console.log(getPingName());
console.log(baro.age, baro.getName());

const rara = {
  name: "라라핑",
  age: 8,
  getName: getPingName,
};

console.log(getPingName());
console.log(rara.age, rara.getName());
