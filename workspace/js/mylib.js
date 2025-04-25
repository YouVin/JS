// 다른 라이브러리와의 충돌을 피하기 위해 선언
// 로대쉬나 쿼리는 _ 식으로 선언
const mylib = {};

Function.prototype.memoize = function () {
  const fn = this; // meoize를 위한 코드 (isPrime)
  // 고차함수 -> 함수가 함수를 리턴
  return function () {
    return fn.memo.apply(fn, arguments); // isPrime.momo 호출
    //return fn.memo(arguments[0]); // arguments[0] 은 key
  };
};

Function.prototype.memo = function (key) {
  //캐시를 위한 코드
  //_cache는 외부에서 접근할 필요가 없는 속성
  //_cache는 isPrime 함수의 속성으로 정의
  // this 는 isPrime
  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    return (this._cache[key] = this(key));
  }
};

// Child가 Parent를 상속 받는다.
mylib.inherite = function (parent, Child) {
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();
  Child.prototype = Object.create(parent.prototype);
  Child.prototype.constructor = Child;
};
