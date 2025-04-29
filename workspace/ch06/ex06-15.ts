// 인터페이스 다중 상속

(() => {
  // 할일 등록시 사용
  // 제목, 내용
  interface TodoRegist {
    title: string;
    contents: string;
  }

  // 할일 목록 조회시 사용
  // id, 제목, 완료 여부
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  // 할일 상세 조회시 사용
  // 제목, 내용, 완료 여부 -> 상속 , 등록일, 수정일 추가
  interface TodoInfo extends TodoRegist, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: "할일1",
    contents: "내용1",
  };
  const todo2: TodoList = {
    id: 2,
    title: "할일2",
    done: false,
  };
  const todo3: TodoInfo = {
    id: 3,
    title: "할일3",
    contents: "내용3",
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
