/*
반복문 - while문
*/
//  1부터 10까지 홀수의 합계 출력. 25

i = 1;
let sum = 0;
while(i<=10){
  if(i%2!=0){
    sum +=i;
  }
  i++;
}
console.log(sum);

//  1부터 10까지 짝수의 합계 출력. 30