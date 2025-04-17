/*
반복문 - break, continue
*/

// n ~ m 까지의 정수중에서 첫번째 짝수를 찾아서 출력하세요.

const n = 1;
const m = 10;

for (let i = n; i <= m; i++) {
  //짝수확인
  if (i % 2 == 0) {
    console.log(i + "는 짝수입니다.");
    break;
  }
}

// n 부터 m 까지 홀수와 짝수를 구분해서 출력하세요.
for(let i =n; i<=m; i++){
  if(i % 2 === 1){
    console.log('홀수', i);
    continue;
  }

  console.log('짝수', i);
}