function add1() {
  return 5 + 5;
}
console.log(add1());

const add2 = () => 5 + 6;
const add3 = (n1, n2) => n1 * n2;
const add4 = (n1, n2, n3, n4, n5) => {
  const sum = n1 + n2;
  const diff = n3 - n4;
  const multi = n5 * diff;
  const result = sum + diff + multi;
  return result;
};

console.log(add2());
console.log(add3(5, 3));
console.log(add4(5, 12, 15, 7, 3));
