"use strict";
// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사
(() => {
    console.log("시작");
    const timerId = setInterval((a, b) => {
        console.log("3초 후에 실행 됩니다.");
    }, 1000 * 3, 10, 20);
    console.log("종료");
    // timeout 작업 취소
    //clearInterval(timerId);
})();
