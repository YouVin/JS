// 유니언 타입(union type)

(() => {
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }

  logString("hello");
  logNumber(123);

  // 유니언 타입
  // | 연산자로 여러 타입을 지정
  function log(msg: string | number) {
    console.log(msg);
  }
  log("hello");
  log(123);
})();
