const { isatty } = require("tty");

/*
if-else if문을 이용

1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템 구축 관리 입니다.
다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.
출력 결과:
const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리
총점: 303
평균: 60.6
*/
const softwareDesign = 62; // 1. 소프트웨어 설계
const softwareDevelopment = 56; // 2. 소프트웨어 개발
const databaseSetup = 61; // 3. 데이터베이스 구축
const programmingUsage = 50; // 4. 프로그래밍 언어 활용
const systemManagement = 15; // 5. 정보 시스템 구축 관리

const total = softwareDesign + softwareDevelopment + databaseSetup + programmingUsage + systemManagement;
const avg = total / 5
let maxScore = softwareDesign;
let minScore = softwareDesign;

if (softwareDevelopment > maxScore) {
  maxScore = softwareDevelopment;
}
if (databaseSetup > maxScore) {
  maxScore = databaseSetup;
}
if (programmingUsage > maxScore) {
  maxScore = programmingUsage;
}
if (systemManagement > maxScore) {
  maxScore = systemManagement;
}

if (softwareDevelopment < minScore) {
  minScore = softwareDevelopment;
}
if (databaseSetup < minScore) {
  minScore = databaseSetup;
}
if (programmingUsage < minScore) {
  minScore = programmingUsage;
}
if (systemManagement < minScore) {
  minScore = systemManagement;
}

console.log(`총점: ${total}`);
console.log(`퍙균: ${avg}`);
console.log(`최고점: ${maxScore}`);
console.log(`최저점: ${minScore}`);

if(minScore < 40){
  console.log(`아쉽지만 불합격입니다. 사유: 과락 40점 미달(${minScore}점)`);
} else if(avg < 60){
  console.log('아쉽지만 불합격입니다. 사유: 평균 60점 미달');
}else{
  console.log('축하합니다. 합격입니다.');
}