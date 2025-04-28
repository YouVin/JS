// 선택적 파라미터(optional parameter)

(() => {
  function user(name: string, age?: number): void {
    //age는 선택적 파라미터로, undefined로 초기화 되어 출력된다.
    console.log(name, age);
  }

  user("하루", 5);
  user("하루"); // age 는 undefined로 출력
})();
