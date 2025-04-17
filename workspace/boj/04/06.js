/*
제목: 공 바꾸기
설명: 배열의 값을 교환하는 문제
제출: https://www.acmicpc.net/submit/10813

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 
바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
도현이는 앞으로 M번 공을 바꾸려고 한다. 
도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에 걸쳐서 공을 교환할 방법이 주어진다. 
각 방법은 두 정수 i j로 이루어져 있으며, i번 바구니와 j번 바구니에 들어있는 공을 교환한다는 뜻이다. (1 ≤ i ≤ j ≤ N)
도현이는 입력으로 주어진 순서대로 공을 교환한다.

출력
1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다.

예제 입력 1 
5 4  -> 바구니 개수 / 교환 횟수
1 2 // 2 1 3 4 5
3 4 // 2 1 4 3 5
1 4 // 3 1 4 2 5
2 2 // 3 1 4 2 5

예제 출력 1 
3 1 4 2 5
*/

// 4-5 와 다른 점? -> 1. 4-5 는 바구니 안 공을 넣고 덮어쓰기, 4-6 은 바구니 안 공을 서로 바꾸기
              //  -> 2. 배열 시작값 : 4-5 -> [0, 0 ,0 ,0, 0], 4-6 -> [1, 2, 3, 4, n] 

function main() {
  const data = getData();
  const n = data[0][0]; // 바구니 개수  
  const m = data[0][1]; // 바구니 교환 횟수
  const result = []; // 담을 배열 선언
  
  // 바구니에 초기 공 넣기 -> 배열은 인덱스 0부터 시작
  for(let i = 0; i<n; i++){  
    result[i] = i + 1; 
  }

  // 교환 코드
  for(let i = 1; i <= m; i++){ 
    
    // a = 1 b = 2 -> 바구니 1, 2 교환
    const a = data[i][0];  // -> 바구니 시작번호
    const b = data[i][1];  // -> 바구니 끝번호 

    //교환
    // 기존 배열을 복사해둘게 필요하다. -> 복사본
    const temp = result[a - 1]; // a 바구니에 있는 공 번호 -> 기존 값이 temp에 저장
    result[a - 1] = result[b - 1]; // b 바구니에 있는 공을 a 바구니에 넣기
    result[b - 1] = temp;         // 기존 복사해둔 a 바구니 값을 b 바구니에 넣기

  }
  console.log(result.join(' '));
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

main();