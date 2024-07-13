function func1({ a, b }) {
  console.log(a);
  console.log(b);
}
const obj = { a: 10, b: 20 };
func1(obj);

function func2([a, b]) {
  console.log(a);
  console.log(b);
}

const arr = [1, 2];
func2(arr);
