// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사

(() => {
  function f1() {
    return new Promise<string>((resolve, reject) => {
      console.log("\t\t2. f1 호출됨.");
      const delay = Math.floor(Math.random() * 1000 * 10);
      console.log(`\t\t3. ${delay}ms 동안 작업중...`);

      setTimeout(() => {
        if (delay < 5000) {
          resolve("f1 작업 결과." + delay);
        } else {
          reject("f1 작업 결과." + delay);
        }
      }, delay);
    });
  }

  function test() {
    f1()
      .then((result) => {
        // 콜백 함수 전달
        console.log("\t첫번째 f1 작업이 완료된 후에 호출.", result);
      })
      .then(f1)
      .then((result) => {
        // 콜백 함수 전달
        console.log("\t두번째 f1 작업이 완료된 후에 호출.", result);
      })
      .then(f1)
      .then((result) => {
        // 콜백 함수 전달
        console.log("\t세번째 f1 작업이 완료된 후에 호출.", result);
      })
      .catch((reason) => {
        console.log("8. f1 작업 실패", reason);
      })
      .finally(() => {
        console.log("f1 성공/실패와 상관없이 항상 호출");
      });
  }

  console.log("1. 작업 시작.");
  test();
  console.log("7. 작업 종료.");
})();
