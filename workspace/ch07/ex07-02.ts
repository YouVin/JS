// 주요 내장 함수 - setTimeout

(() => {
  console.log("시작");

  const timerId = setTimeout(() => {
    console.log("3초 후에 실행 됩니다.");
  }, 1000 * 3);

  console.log("종료");

  // timeout 작업 취소
  clearTimeout(timerId);
})();
