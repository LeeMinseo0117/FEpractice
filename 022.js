// https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/
// 개선할 여지가 있는 예제
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {
  // 회원 등급 권한
  console.log("함수기능");
  return;
}

함수4("Gold", true, true, true, "대화방 전체 백업 가능", true); // 가독성이 떨어진다.

function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}

함수4({
  회원등급: "Gold",
  글쓰기: true,
  글읽기: true,
  채널관리: false,
  백업: "부분가능",
  소셜로그인여부: true,
});

///////입력되지 않은 값은 undefined///////

function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}

함수4({
  회원등급: "Gold",
  채널관리: false,
  백업: "부분가능",
  소셜로그인여부: true,
});

///////초깃값 설정1///////

function 함수4({
  회원등급 = "Gold",
  글쓰기 = true,
  글읽기 = true,
  채널관리 = true,
  백업 = "부분가능",
  소셜로그인여부 = true,
}) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
}

함수4({
  회원등급: "Silver",
  소셜로그인여부: true,
});

///////초깃값 설정2///////
// 참고삼아서만 보세요.
// let one
// let two
// let three
// {one, two, three}

// let {one, two, three} = {one: 10, two: 100, three: 200} // 작동
// let {one:30, two, three} = {one: 10, two: 100, three: 200} // Error

//   // 함수에서 받는 부분      // 아규먼트를 전달해주는 부분
// let {one = 30, two, three} = {one: 10, two: 100, three: 200} // 등호가 된다는 원리가 이 이유입니다.

// function 함수4({
//   회원등급: 'Gold', // 안되는 이유?
//   글쓰기,
//   글읽기,
//   채널관리,
//   백업,
//   소셜로그인여부
//   }){
//   console.log('함수기능')
//   console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
//   return
// }

함수4({
  회원등급: "Silver",
  소셜로그인여부: true,
});

////// 아규먼트 없이 호출 가능 //////
function 함수({ a = 2, b = 1, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(함수({ a: 20, b: 30, c: 10 }));
함수(); // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}
함수();

// X
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수();

// O
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수({}); // 이 코드를 축소한 코드가 위의 코드입니다.

// 함수에서 받는 부분         // 아규먼트를 전달해주는 부분
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}  // 이 방식이 간소화된 것입니다.
// let {a=10, b=20, c=30} = undefined
