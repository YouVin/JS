// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용
const url = "https://api.thecatapi.com/v1/images/search";

// 버튼 찾기
const btn = document.querySelector("button");

// ? 옵셔널 체이닝 (null 일수도 있으니)
btn?.addEventListener("click", getImages);

async function getImages() {
  try {
    const response = await fetch(url);
    // try 에서는 404, 500, 403, 400도 일단 응답 성공으로 받아온 것으로 확인
    // 따라서 response.ok로 한번 더 성공했는지 확인하기 (200대)
    if (response.ok) {
      const data: Cat[] = await response.json();
      appendImages(data);
    } else {
      console.error(response.status, "에러 발생");
    }
  } catch (err) {
    console.error(err);
  }
}
