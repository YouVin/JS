const { isatty } = require("tty");

/*
if-else if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/
const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

if (isLogin == 1) {
  console.log('로그인 상태');

  if (isUser == 1) {
    console.log('사용자 로그인 상태');
  } else if (isSeller == 1) {
    console.log('판매자 로그인 상태');
  } else if (isAdmin == 1) {
    console.log('관리자 로그인 상태');
  }
} else {
  console.log('로그아웃 상태');

  if (isUser == 1) {
    console.log('사용자 로그아웃 상태');
  } else if (isSeller == 1) {
    console.log('판매자 로그아웃 상태');
  } else if (isAdmin == 1) {
    console.log('관리자 로그아웃 상태');
  }
}

