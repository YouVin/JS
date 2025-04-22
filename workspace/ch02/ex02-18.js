console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  const minFn = (a, b) => (a < b ? a : b); // a b 중 더 작은 값 반환 하는 함수!
  let min = nums[0]; // nums[0]를 <일단> 최소 값으로 설정

  // 최소값을 구하는 반복문
  for (let i = 1; i < nums.length; i++) {
    // nums[0] 와 nums[i] 비교
    // minFn 호출
    // nums[0] 부터 nums[i] 까지 비교해 최소값 찾기
    // this 는 어차피 사용하지 X + 화살표 함수에서는 의미 없음

    // call 버전
    min = minFn.call(this, min, nums[i]);
    // apply 버전
    min = minFn.call(this, [min, nums[i]]);
    // 좋은 버전
    min = minFn(min, nums[i]);
  }

  return min;
}

// 강사님 코드
// function smallest(nums) {
//   return Math.min(...nums);
// }

//...nums는 spread operator(전개 연산자)

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20
