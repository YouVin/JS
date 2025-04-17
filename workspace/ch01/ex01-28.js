/*
유사 배열 객체
*/
/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {[]} arr - 배열 
 */
function printArr(arr){
  for(let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

const colorArr = ['orange', 'yellow', 'green'];
printArr(colorArr);
/* 유사 배열 객체
- length 속성
- 0부터 시작해서 1 씩 증가하는 속성 추가
 */
const arr = {
  length: 3,
  0: 'orange',
  1: 'yellow',
  2: 'green'
};
printArr(arr);