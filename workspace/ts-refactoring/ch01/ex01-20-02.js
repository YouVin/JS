"use strict";
(() => {
    /*
    while문을 사용한 반복문 예제
    - 홀수와 짝수의 합계를 구하는 두 가지 방법을 보여줍니다.
    - 첫 번째 방법: 모든 수를 순회하며 조건문으로 홀수/짝수 판별
    - 두 번째 방법: 홀수/짝수만 순회하는 효율적인 방법
    */
    // 1부터 10까지 홀수의 합계 출력. 25
    let i = 1; // 시작값 1로 초기화
    let sum = 0; // 합계를 저장할 변수 초기화
    // 방법 1: 모든 수를 순회하며 홀수만 더하는 방법
    // while (i <= 10) { // i=1~10
    //   if (i % 2 === 1) { // 홀수 판별 (2로 나눈 나머지가 1)
    //     sum += i;  // 홀수일 경우 합계에 더함
    //   }
    //   i++;  // 다음 숫자로 이동
    // }
    // 방법 2: 홀수만 순회하는 효율적인 방법
    while (i <= 10) { // i=1,3,5,7,9 (홀수만 순회)
        sum += i; // 현재 홀수를 합계에 더함
        i += 2; // 다음 홀수로 이동 (2씩 증가)
    }
    console.log('1부터 10까지 홀수의 합계 출력', sum);
    // 1부터 10까지 짝수의 합계 출력. 30
    i = 2; // 시작값 2로 초기화 (첫 번째 짝수)
    sum = 0; // 합계 변수 초기화
    // 방법 1: 모든 수를 순회하며 짝수만 더하는 방법
    // while (i <= 10) { // i=1~10
    //   if (i % 2 === 0) { // 짝수 판별 (2로 나눈 나머지가 0)
    //     sum += i;  // 짝수일 경우 합계에 더함
    //   }
    //   i++;  // 다음 숫자로 이동
    // }
    // 방법 2: 짝수만 순회하는 효율적인 방법
    while (i <= 10) { // i=2,4,6,8,10 (짝수만 순회)
        sum += i; // 현재 짝수를 합계에 더함
        i += 2; // 다음 짝수로 이동 (2씩 증가)
    }
    console.log('1부터 10까지 짝수의 합계 출력', sum);
})();
