// ex02-15.js 복사

globalThis.name = 'global'; // 브라우저는 window, Node.js는 global 객체

const getPingName = function(){
  return this.name;
};

const baro = new Object();
baro.name = '바로핑';
baro.age = 9;
baro.getName = getPingName;

const rara = {
  name: '라라핑',
  age: 8,
  getName: getPingName
};


// 객체를 생성해서 반환하는 함수
function Ping(){

}

const copyPing = Ping();


// 함수 호출하는 방법 1 - 일반 함수로 호출(this는 window)
console.log(getPingName()); // this = window

// 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName()); // getName()의 this는 baro
console.log(rara.age, rara.getName()); // getName()의 this는 rara
console.log(copyPing.age, copyPing.getName()); // getName()의 this는 copyPing


console.log(getPingName(), getPingName.call(baro)); // this = window, baro
console.log(baro.getName(), baro.getName.apply(rara)); // this = baro, rara
console.log(rara.getName(), rara.getName.apply(globalThis)); // this = rara, window
