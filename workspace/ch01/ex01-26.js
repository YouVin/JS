/*
배열 생성, 읽기, 쓰기
*/

const arr =  new Array(1, 2, 3);
// 지정한 배열에 마지막 요소를 추가한다.
arr.push(10);
arr[4] = 20;
arr[5] = 30;
arr[1] = 100; // 이미 추가된 값을 대체한다.
arr[9] = 200; // 중간을 비워두고 값을 추가해도 가능하다. 

//배열의 마지막에 새로운 데이터 추가
arr[arr.length] = 300;
arr.push(10);  // -> 둘다 같지만 배열 메서드를 사용하자!

//배열의 길이
console.log(arr.length);
console.log(typeof arr, arr);
