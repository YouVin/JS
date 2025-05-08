import { Cat } from "./types.js";

export function appendImages(images: Cat[]) {
  // 이미지를 넣을 ul 찾기
  const catList = document.querySelector("#cat-list");
  //
  images.forEach((item) => {
    // li 먼저 추가
    const li = document.createElement("li");
    // img 태그 넣기
    const img = document.createElement("img");
    // img 태그에 속성을 item에 담겨 있는 속성으로 담기
    img.src = item.url;
    img.height = item.height;
    img.width = item.width;
    img.id = item.id;

    // 리스트에 이미지 태그 자식으로 추가
    li.appendChild(img);
    // 전체 cat리스트에 리스트와이미지태그를 자식으로 추가
    catList?.appendChild(li);
  });
}
