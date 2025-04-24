function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(10, 20, 30));

let currySum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

// 어후 가독성 떨어져 어후 ~
//"한 번에 하나씩 인자를 받는 함수로 쪼개는 것"

currySum = a = (b) => (c) => a + b + c;

console.log(currySum(10)(20)(30));
