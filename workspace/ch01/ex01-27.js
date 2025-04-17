/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/


const arr = [1, 2 ,3 ,4];
//배열의 모든 요소 출력(for)
console.log('for');
for(let i = 0; i<arr.length; i++){
  console.log(arr[i]);
}

//배열 모든 요소의 합계 , 홀수의 합계, 짝수의 합계를 출력

let sum = 0, oddSum = 0, evenSum =0;
for(let i = 0; i<arr.length; i++){
  sum += arr[i];
  if(arr[i] % 2 === 0){
    evenSum += arr[i];
  }else{
    oddSum += arr[i];
  }
}
console.log(`arr 배열의 합계 ${sum} 홀수의 합계 ${oddSum} 짝수의 합계 ${evenSum}`);

//for 인덱스를 사용해야 할 경우
for(let i =0; i<arr.length; i++){
  let elem = arr[i];
  console.log(elem);
}

//for-of -> 인덱스는 사용하지 않고 배열 요소의 값만 꺼내서 사용할 때 사용
for(let elem of arr) {
  console.log(elem);
} 

//for-in -> 인덱스만 사용하고 배열 요소의 값은 사용하지 않을 때 사용
for(let prop in arr){
  console.log(prop, arr[prop]);
}

