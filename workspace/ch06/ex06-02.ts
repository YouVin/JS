// 기본 타입

(() => {
  let str: string = "hello";
  let age: number = 20;
  let done: boolean = true;
  //done = 'false'; // Error : type 'string' is not 'boolean'

  let nullVal: null = null;
  let emptyVal: undefined;

  let todo: object = { title: "TypeScript 공부", done: false };
  let todoList: Array<string> = ["JavaScript", " TypeScript"];
  let todoList2: string[] = ["React", "Next.js"];

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입
  let items: [string, number] = ["모닝핑", 2000];

  let userName: any = "빈유황";
  userName = 1999; // any 는 어떤 값이든 가능

  // unknown: 어떤 값이든 저장이 가능하지만, 사용할 때 추가적인 타입 체크 코드를 요구
  let userName2: unknown = "황유빈";
  userName2 = 1999;

  // 런타임 에러 발생
  //console.log(userName.toUpperCase());

  // 에러 발생 숫자 타입에 toUpperCase 메서드가 없기 때문 -> 타입 체크 해주기
  // console.log(userName2.toUpperCase());

  // 타입 체크
  if (typeof userName2 === "string") {
    // console.log(userName2.toUpperCase());
  }
})();
