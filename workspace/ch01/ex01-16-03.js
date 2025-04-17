const { isatty } = require("tty");

/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/
const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

// isLogin이 true이면 "로그인 상태" 출력

if(isLogin == 1){
  console.log('로그인 상태');
}

// isLogin이 false이면 "로그아웃 상태" 출력

if(isLogin == 0){
  console.log('로그아웃 상태');
}

// isUser가 true이면 "사용자" 출력
if(isUser == 1){
  console.log('사용자');
}

// isSeller가 true이면 "판매자" 출력

if(isSeller == 1){
  console.log('판매자');
}

// isAdmin이 true이면 "관리자" 출력
if(isAdmin == 1){
  console.log('관리자');
}

// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
if(isLogin == 1 && isUser == 1){
  console.log('사용자 로그인 상태')
}

// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
if(isLogin == 0 && isUser == 1){
  console.log('사용자 로그아웃 상태')
}


// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
if(isLogin == 1 && isSeller == 1){
  console.log('판매자 로그인 상태')
}

// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
if(isLogin == 0 && isSeller == 1){
  console.log('판매자 로그아웃 상태')
}



// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
if(isLogin == 1 && isAdmin == 1){
  console.log('관리자 로그인 상태')
}


// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
if(isLogin == 0 && isAdmin == 1){
  console.log('관리자 로그아웃 상태')
}

