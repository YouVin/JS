// 비동기 함수
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// ex08-06.ts 복사

(() => {
  function f1() {
    console.log("\t\t3. f1 호출됨.");
    const delay = Math.floor(Math.random() * 1000 * 10);
    console.log(`\t\t ${delay}동안 작업중...`);

    set;
    console.log("f1 리턴됨.");
  }

  function test() {
    console.log("test 호출됨.");
    f1();
    console.log("test 리턴됨");
  }

  // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log("작업 시작.");
  test();
  console.log("작업 종료.");
})();
