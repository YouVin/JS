// 에러 핸들링 - try...catch 문
// ex08-02.ts 복사

(() => {
  function f1() {
    try {
      const fn = new Function("x", "y", "retrun x+y"); // SyntaxError 발생
      console.log(fn(10, 20));
    } catch (err) {
      if (err instanceof Error) {
        // 이게 없으면 err는 언노운 이기에 타입 가드를 해줘야함
        console.log("에러 발생", err.message);
      }
    }
  }

  function f2() {
    f1();
  }

  f2();
  console.log("프로그램 정상 종료");
})();
