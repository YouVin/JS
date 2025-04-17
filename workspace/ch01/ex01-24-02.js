/* json 표기법으로 총점과 평균 구하기 */ 
const score = {
  userName: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
  sum: function(){
    return this.kor + this.eng + this.math;
  },
  avg: function(){
    return this.sum() / 3;
  }
};

console.log(score.kor, score.eng, score['math']);
console.log('총점', score.sum());
console.log('평균', score.avg());

let calculater = {
  // x: 11,
  // y: 5,
  // sum: function () {
  //   console.log(`${this.x} + ${this.y} = ${this.x + this.y}`);
  // },
  // sum1: function (x, y) {
  //   console.log(`${x} + ${y} = ${x + y}`);
  // },
  // opArr: ["+", "-", "*", "/", "%"],
  // funArr: [sumNum, subNum, mulNum, divNum, remNum],
  sum: function sumNum(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
  },
  sub: function subNum(x, y) {
    console.log(`${x} - ${y} = ${x - y}`);
  },
  mul: function mulNum(x, y) {
    console.log(`${x} x ${y} = ${x * y}`);
  },
  div: function divNum(x, y) {
    console.log(`${x} / ${y} = ${Math.floor(x / y)}`);
  },
  rem: function remNum(x, y) {
    console.log(`${x} % ${y} = ${x % y}`);
  },
  cal: function (x, y, op) {
    // for (let i = 0; i < this.opArr.length; i++) {
    //   if (this.opArr[i] === op) {
    //     this.funArr[i](x, y);
    //   }
    // }

    if (op === "+") {
      this.sum(x, y);
    } else if (op === "-") {
      this.sub(x, y);
    } else if (op === "*") {
      this.mul(x, y);
    } else if (op === "/") {
      this.div(x, y);
    } else if (op === "%") {
      this.rem(x, y);
    }
  },
};