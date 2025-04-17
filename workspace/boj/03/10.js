/*
제목: 별 찍기 - 2
설명: 별을 찍는 문제 2
제출: https://www.acmicpc.net/submit/2439

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
5

예제 출력 1
    *
   **
  ***
 ****
*****
*/

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const star = Number(fileData);

for (let i = 1; i<=star; i++){
  let line ='';  
  for(let j=1;j<=star-i; j++){
    line = line + ' ';
  }
  for(let k=1;k<=i;k++){
    line+='*';
  }
  console.log(line);
}

function main(){
  const data = getData();
  console.log(data);
  for(let i = 0; i<=data; i++){
    const space = ' '.repeat(data-i);
    const star = '*'.repeat(i);
    console.log(space + star);
  }
}

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(' ');
    for (let k=0; k<rowArr.length; k++) rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length===1 ? result[0] : result;
}

/**
 *   k  0 1 2 3 4         k 0 1 2 3
 * i=0  _ _ _ _ *       i=0 _ _ _ *
 * i=1  _ _ _ * *       i=1 _ _ * *
 * i=2  _ _ * * *       i=2 _ * * *
 * i=3  _ * * * *       i=3 * * * *
 * i=4  * * * * *
 */

// *의 해당하는 값들은 i+k >= 4(lines-1) 의 형태임을 알 수 있음
// k >= lines - 1 -i
for (let i = 0; i < lines; i++) {
  let star = '';
  for (let k = 0; k < lines; k++) {
    if (k >= lines - 1 - i) {
      star += '*'; // * 해당하는 값인 조건
    } else {
      star += ' '; // 공백에 해당하는 값인 조건
    }
  }
  console.log(star); //i의 해당하는 k조건문이 끝나면 출력, 이후 i에 의한 for문이 다시 시작될 때 star를 초기화해줌
}