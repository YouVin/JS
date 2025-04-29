// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(() => {
  // T가 아닌 식별자 규칙 따르는 아무 문자나 사용 가능하지만, 관례적으로 Type의 첫글자 T 사요
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  //console.log(echo<boolean>(true)); // 제약 조건으로 쓸 수 없다.
  // 주로 내장할수를 사용하기 위헤서 조건을 해둔다.

  const str = echo<string>("hello");
  const num = echo<number>(123.456);

  console.log(str.toUpperCase(), num.toFixed(2));

  function echo2<T extends { length: number }>(msg: T): T {
    return msg;
  }

  //echo2<number>(100); // length 속성이 없음
  const str2 = echo2<string>("hello");
  const num2 = echo2<number[]>([10, 20]);

  console.log(str2.length, num2.length);
})();
