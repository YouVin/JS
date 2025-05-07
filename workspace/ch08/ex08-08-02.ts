// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// ex08-08.ts 복사

(() => {
  function f1() {
    return new Promise<string>((resolve, reject) => {
      console.log("\t\t3. f1 호출됨.");
      const delay = Math.floor(Math.random() * 1000 * 10);
      console.log(`\t\t4. ${delay}ms 동안 작업중...`);

      setTimeout(() => {
        if (delay < 5000) {
          resolve("f1 작업 결화." + delay);
        } else {
          reject("f1 작업 결화." + delay);
        }
      }, delay);
    });
  }

  function test() {
    f1().then(
      (result) => {
        // 콜백 함수 전달
        console.log("\t8. f1 작업이 완료된 후에 호출.", result);
      },
      (resason) => {
        console.log("8. f1 작업 실패.", resason);
      }
    );
  }

  console.log("1. 작업 시작.");
  test();
  console.log("7. 작업 종료.");
})();
