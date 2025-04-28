// 함수에 타입 지정

(() => {
  function getCount(count: number): string {
    // return count; -> type Error
    return "Count: " + count;
  }

  // let result = getCount('20') ; -> type Error
  let result = getCount(20);

  console.log(result);
})();
