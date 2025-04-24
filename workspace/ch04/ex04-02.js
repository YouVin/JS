// count 속성과 ride(), getCount() 메서드 작성
const Counter = function () {
  let count = 0;
  this.getCount = function () {
    return count;
  };
  this.ride = function () {
    if (count < 40) {
      count++;
      console.log("탑승자 수", this.count);
    } else {
      console.log("정원 초과");
    }
  };
};

const c = new Counter();
c.ride();
c.ride();

for (let i = 0; i < 40; i++) {
  c.ride();
}

c.count += 100; // undefined 원래 위에 Counter에서 this.count로 속성으로 할 시에는 값이 바뀌지만
// 현재 캡슐화로 속성을 없애고 지역변수와 클로저를 통해 count를 사용하고 있으므로 값에 변화가 없다.
console.log("전체 탑승자", c.getCount());
