/*
!!! nums가 1개일 경우 배열이 아니라 숫자가 들어오기 때문에 주의해야 함

제목: 개수 세기
설명: 배열을 입력받고 v를 찾는 문제
제출: https://www.acmicpc.net/submit/10807

문제
총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 
둘째 줄에는 정수가 공백으로 구분되어져있다. 
셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 
입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다.

예제 입력 1
11
1 4 1 2 4 2 4 2 3 4 4
2
예제 출력 1
3

예제 입력 2
11
1 4 1 2 4 2 4 2 3 4 4
5
예제 출력 2
0

예제 입력 3
1
42
42
예제 출력 3
1
*/

function main() {
  const data = getData(); // [N, numbers[], v]
  const numbers = data[1];
  const v = data[2];

  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === v) count++;
  }

  console.log(count);
}

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");

  const N = parseInt(arr[0]);

  const strNums = arr[1].split(' ');
  const numbers = [];
  for (let i = 0; i < strNums.length; i++) {
    numbers.push(parseInt(strNums[i]));
  }

  const v = parseInt(arr[2]);

  return [N, numbers, v];
}

main();
