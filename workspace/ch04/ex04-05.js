// // Function에 prototype 에 메모라는 함수 추가!
// Function.prototype.memo = function (key) {
//   //캐시를 위한 코드
//   //_cache는 외부에서 접근할 필요가 없는 속성
//   //_cache는 isPrime 함수의 속성으로 정의
//   // this 는 isPrime
//   this._cache = this._cache || {};
//   if (this._cache[key] !== undefined) {
//     return this._cache[key];
//   } else {
//     return (this._cache[key] = this(key));
//   }
// };

// js/mylib.js 파일에 memo 정의됨

// 지정한 수가 소수인지 여부를 반환
var isPrime = function (num) {
  // 소수 판별 코드
  let prime = true;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

console.time("소요시간");
console.log("3 -> ", isPrime(3));
console.log("4 -> ", isPrime(4));
console.log("5 -> ", isPrime(5));
console.log("6 -> ", isPrime(6));
console.log("7 -> ", isPrime(7));
console.log("8 -> ", isPrime(8));
console.log("9 -> ", isPrime(9));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.timeEnd("소요시간");
