// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex05-13.ts 복사
import { appendImages } from "./utils.js";
// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용
const url = "https://api.thecatapi.com/v1/images/search";
// 버튼 찾기
const btn = document.querySelector("button");
// ? 옵셔널 체이닝 (null 일수도 있으니)
btn?.addEventListener("click", getImages);
async function getImages() {
    try {
        const response = await axios.get(url);
        const data = response.data;
        appendImages(data);
    }
    catch (err) {
        console.error(err);
    }
}
