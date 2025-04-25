// function fn() {
//   var alert = "출입 금지";
//   console.log(alert);
// }
// fn();

// 일회용으로 변수 사용하고 싶을때,
// 전역 변수 방지할 때
(() => {
  var alert = "출입 금지";
  console.log(alert);
})();

alert("작업 완료");
