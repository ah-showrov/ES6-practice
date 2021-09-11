const numbers = [3, 6, 7, 22, 44, 22, 99];
// const numbers = [
//   { name: "A", color: "black" },
//   { name: "B", color: "pink" },
//   { name: "C", color: "red" },
//   { name: "D", color: "black" },
// ];

// old function
const num44 = numbers.find(function add1(num) {
  return num > 20;
});
console.log(num44);

// arrow function
const add1 = numbers.find((number) => number == 44);
console.log(add1);

// const add1 = numbers.find((number) => number.color == "black");
// const add1 = numbers.filter((number) => number.color == "black");
// const add1 = numbers.find((number) => number > 20);
// const add1 = numbers.map((number) => number.color == "black");
