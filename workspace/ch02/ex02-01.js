/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

const num = 100; // number
const str = "hello"; // string
const obj = {}; // object
const arr = [num, str]; // object(array)

// 함수를 변수에 할당
function foo() {
  return "I am foo.";
}

// 함수를 배열의 요소로 할당
arr.push(obj);
arr.push(foo);

// 함수를 객체의 속성으로 할당(메서드)
obj.bar = foo;
obj.baz = function () {
  return "I am baz.";
};
console.log(foo(), arr[3](), obj.bar());

//foo() this는 windwo
// arr[3]() => arr.3() this 는 arr
// obj.bar() this는 obj
// arr[2].bar() this는 obj
