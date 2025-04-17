/*
논리 연산자 &&, ||, !
*/

//논리 합(or)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var id = 'hong';
var invalidId = id.length < 4 || id.length;
console.log('id 입력 조건에 맞지 않음', invalidId);

// 앞의 값이 참이면 앞의 값을 반환
console.log('hello' || 'world'); // hello
console.log(90 || 30);  // 90
console.log(null || 'world'); // world
console.log(undefined || 'hello');  // hello
console.log(0 || 100);  // 100

// 앞의 값이 거짓이면 뒤의 값을 반환
let userName = "유저 이름";
let userAge = 22;
console.log(userName || "guest");
userName = "";
console.log(userName || "guest");

// 논리 곱(AND)
// 피연산자 둘 다 TRUE 일 경우 TRUE 가 됨.
// 둘 중 하나라도 FALSE 일 경우 FALSE 가 됨.
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환

id = null; // type은 object 
console.log('글자수', id && id.length);
console.log('글자수', id?.length); //옵셔널 체이닝(Optional Chaining)