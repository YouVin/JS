/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
*/

const getPingName = function () {
  return this.name;
};

// 객체를 생성해서 반환하는 함수
function Ping(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}
/**
 * new의 동작
 * 1. 빈 객체를 가르키는 this 생성
 * 2. this를 생성자 함수에 전달
 * 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
 */
const baro = new Ping("바로핑", 7);
const rara = new Ping("라라핑", 8);
const copyPing = new Ping("카피핑", 12);

console.log(baro.getName(), baro.age);
console.log(rara.getName(), rara.age);
console.log(copyPing.getName(), copyPing.age);
