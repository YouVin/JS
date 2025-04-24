const sum = function (x, y) {
  return x + y;
};

const currySum = _.curry(sum);

console.log(sum(10, 20));
console.log(currySum(30)(40));
