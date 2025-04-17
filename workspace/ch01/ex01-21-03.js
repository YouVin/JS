/*
반복문 - for문 이용한 구구단
*/
/* 
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

for(let dan = 2; dan <=9; dan++){
  for(let i = 1; i<= 9; i++){
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

/*
2단부터 9단까지 출력
출력 예시
2*1=2 3*1=3 ...
2*2=4 3*2=6 ...
...
2*9=18 3*9=27 ...
*/
for(let i = 1; i<= 9; i++){
  let gugu = '';
  for(let dan = 2; dan <=9; dan++){
    gugu += `${dan} x ${i} = ${dan * i}`.padEnd(12);
  }
  console.log(gugu);
}