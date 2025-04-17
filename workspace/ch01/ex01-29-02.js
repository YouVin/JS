/*
2차원 배열
*/

//1차원 배열
const numbers = [
  10,
  20,
  30
]; 

//2차원 배열
const numbers2D = [
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20]
];

console.log(numbers2D[0]); 
console.log(numbers2D[1]); 
console.log(numbers2D[2]); 
console.log(numbers2D[3]); 

let sum = 0;
// 2차원 배열 전체 출력
for(let i = 0; i<numbers2D.length; i++){
  console.log(numbers2D[i]);
  for(let j=0; j<numbers2D[i].length; j++){
    console.log(numbers2D[i][j]);
    sum += numbers2D[i][j];
  }
}
console.log(sum);