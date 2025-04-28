// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사

(() => {
  // 인터페이스 생성
  interface User {
    name: string;
    age: number;
  }

  // 인터페이스를 객체의 타입으로 지정
  const u1: User = {
    name: "하루",
    age: 5,
  };

  const u2: User = {
    name: "나무",
    age: 8,
  };
  console.log(u1.age, u2.name.toUpperCase());

  // 함수의 리턴 타입으로 인터페이스 지정
  const createUser = function (name: string, age: number): User {
    return { name: name, age: age };
  };
  const u3 = createUser("유저핑", 9);
  console.log(u3);

  function getAge(user: User): number {
    return user.age;
  }
  console.log(getAge(u1));
  console.log(getAge(u2));
  console.log(getAge(u3));
  //
})();
