/*
반환값이 있는 함수
*/

add();

add100(10);
add100(20);

sum(10,20);
sum(30,40);

// 10+100 결과를 출력한다
function add(){
  console.log(10+100);
}
// 전달받은 숫자와 100의 합계를 출력하는 함수
function add100(num){
  console.log(num + 100);
}
// 전달받은 두 숫자의 합계를 출력하는 함수
function sum(num1, num2){
  console.log(num1 + num2);
}