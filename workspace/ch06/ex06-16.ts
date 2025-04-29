// 인터페이스 선언 병합
// ex06-15.ts 복사

// 왜쓰는데? 그냥 하나에 다하면 되잖아
// 외부 라이브러리에서 받은게 Todo 라고 할 때,
// 직접 수정이 불가능하니 확장 시키기 위해서 재선언을 한다.
(() => {
  // 할일 등록시 사용
  interface Todo {
    //id: string; // 동일한 속성을 지정하려면 type이 같아야 함.
    id: number; // type이 같다면 동일한 속성도 상관 없음
    title: string;
    contents: string;
  }

  interface Todo {
    id: number;
    title: string;
    done: boolean;
    createdAt: Date;
  }

  const todo: Todo = {
    id: 1,
    title: "할일1",
    contents: "내용1",
    done: false,
    createdAt: new Date(),
  };
  console.log(todo);
})();
