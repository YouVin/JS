import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용
const url = "https://api.thecatapi.com/v1/images/search";

// 버튼 찾기
const btn = document.querySelector("button");

// ? 옵셔널 체이닝 (null 일수도 있으니)
btn?.addEventListener("click", getImages);

function getImages(): void {
  // Ajax 프로그래밍 순서
  // 1. XMLHttpRequest 객체 생성
  const xml = new XMLHttpRequest();
  // 2. 요청 준비(open)
  // true -> 비동기, false -> 동기
  xml.open("GET", url, true);
  // 4. 응답 데이터 처리
  xml.addEventListener("load", function () {
    // this -> xml
    const result = this.response;
    console.log(result);
    // data: Cat[] 배열로 JSON 형식으로 파싱
    const data: Cat[] = JSON.parse(result);
    // appendImages 함수를 utils에서 불러와 인자에 data 넣어 호출
    appendImages(data);
  });
  // 3. 서버에 요청(send)
  xml.send();
}
