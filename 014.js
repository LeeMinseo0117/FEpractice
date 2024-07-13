// let obj = { one: 1, two: 2 };
// let { one: myNum } = obj;
// console.log(myNum);

let { q } = { q: 1 };
// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴입니다.
console.log(q);

let { one, two, three, four } = { one: 1 };
// 디스트럭쳐링은 콜론을 통해 변수를 추가적으로 생성할 수 있습니다.
console.log(one);
console.log(two);
console.log(three);
console.log(four);

// const { food1, food2, food3 } = { food1: "과일", food2: "채소", food3: "육류" };

// console.log(food1, food2, food3);

const obj = { food1: "과일", food2: "채소", food3: "육류" };

function objReturn() {
  return obj;
}

// 반환값을 바로 디스트럭쳐링합니다.
const { food1, food2, food3 } = objReturn();

console.log(food1, food2, food3);
