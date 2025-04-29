// echo 함수 - 제네릭 함수
// ex06-17.ts 복사

(() => {
  // T가 아닌 식별자 규칙 따르는 아무 문자나 사용 가능하지만, 관례적으로 Type의 첫글자 T 사요
  function echo<T>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  console.log(echo<boolean>(true));
})();
