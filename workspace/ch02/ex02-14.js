/*
* 함수 호출 방법 1 - 일반 함수
  - this는 window 객체
*/

function f1() {
  console.log(this);
}
const f2 = function () {
  console.log(this);
};

f1();
f2();

// 둘다 실행 시 윈도우 객체를 반환한다!
