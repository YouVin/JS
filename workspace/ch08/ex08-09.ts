// 비동기 함수 - async 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용

(() => {
  function p1() {
    // Promise
    return new Promise((resolve, reject) => {
      resolve("p1 결과");
      reject("p1 에러");
    });
  }
  async function a1() {
    if (true) {
      throw "a1 에러";
    }
    return "a1 결과";
  }

  function test() {
    a1()
      .then((result) => {
        console.log("p1의 작업 결과.", result);
      })
      .then(p1)
      .then((result) => {
        console.log("a1의 작업 결과.", result);
      })
      .then(a1)
      .then((result) => {
        console.log("p2의 작업 결과.", result);
      })
      .then(p1)
      .then((result) => {
        console.log("a2의 작업 결과.", result);
      })
      .catch((error) => {
        console.log("에러 발생.", error);
      });
  }

  console.log("1. 작업 시작.");
  test();
  console.log(
    "2. 작업 종료. 이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미"
  );
})();
