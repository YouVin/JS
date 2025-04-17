/*
매개변수를 가진 함수 - 도어락
*/

function doorLock(password = ''){
  const pwd = 1234;
  const subPassword = password.slice(pwd.length);
  if(subPassword === pwd) {
    console.log('문이 열립니다.')
  }else{
    console.log('비밀번호가 틀립니다.')
  }
}

doorLock(1111);
doorLock(1234);
doorLock('');