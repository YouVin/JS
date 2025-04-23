/**
 *국어, 영어, 수학 점수를 받아서 총점과 평균을 계산하는 객체 생성
 * @param {number} kor
 * @param {number} eng
 * @param {number} math
 */
const Score = function (kor, eng, math) {
  this.kor = kor;
  this.eng = eng;
  this.math = math;

  // 총점 계산
  this.sum = function () {
    return this.kor + this.eng + this.math;
  };

  // 평균 계산
  this.avg = function () {
    return this.sum() / 3;
  };
};

// 바로핑은 점수가 각각 100, 90, 80 이다.
// 라라핑은 점수가 각각 90, 80, 60 이다.
const baro = new Score(100, 90, 80);
const rara = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하세요.
console.log(baro.sum(), baro.avg()); // 270 90
console.log(rara.sum(), rara.avg()); // 230 76.66666666666667

// 수학 점수를 10점 올린 후 총점과 평균을 출력하시오.
baro.math += 10;
rara.math += 10;
console.log(baro.sum(), baro.avg()); // 280 93.33333333333333
console.log(rara.sum(), rara.avg()); // 240 80
