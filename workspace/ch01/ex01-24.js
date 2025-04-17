/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notation
*/
const foo = {
  name: '제이슨핑',
  age: 7,
  job: '요정',
  married: true
};
console.log(foo);

foo.name = '함수핑';
foo['age']= 6;
foo.job = '마법사';
foo['married'] = false;

// 함수핑 6 마법사 false
console.log(foo['name'], foo['age'], foo.job, foo.married);
//object { name: '함수핑' , age: 6, job: '마법사', married: false}
console.log(typeof foo, foo);

