/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

// 함수는 함수의 결과 값으로 반환될 수 있다.
function foo() {
  console.log("foo 호출.");
  return function () {
    console.log("bar 호출");
    return function () {
      console.log("baz 호출");
      return foo(); // ->
      return foo;
    };
  };
}

// 안에 함수 코드도 호출하고 싶다 -> foo() 리턴
// 결과값이 foo()  -> foo 리턴

// 즉 foo()는 foo함수를 실행시키고 나온 결과값을 반환값으로 가지고 foo는 foo함수 자체를 반환값으로 가진다는 의미

function sayHello() {
  return "Hello!";
}
console.log(sayHello()); // :Xsmall_blue_diamond: 실행 결과: "Hello!" 출력
console.log(sayHello); // :small_blue_diamond: 함수 자체 출력: [Function: sayHello]

const f = foo()()()()()()();
f();
