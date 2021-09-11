const first = { a: 1 };
const second = { a: 1 };
// const second = { a: 1, b: 2 };
/* if (first === second) {
  console.log("Both are same");
} else {
  console.log("Note Same");
} */

const converted1 = JSON.stringify(first);
const converted2 = JSON.stringify(second);
if (converted1 === converted2) {
  console.log("Both are same");
} else {
  console.log("Note Same");
}

const obj = {
  a: 1,
  b: 7,
  c: 3,
  length: 2,
};
console.log(Object.keys(obj).length);

const obj1 = { m: 35, v: 2 };
const obj2 = { m: 35, v: 2 };
console.log(obj1 === obj2); //output will be false. cause it's checked reference. Not value. though both are looked same but they are in separate memory space.

const g = (name = "c") => "name"; //will return name.cause name is in quotation.
const g = (name = "c") => name; // will return c .cause name's default value is c.and we didn't pass any argument for g function.
console.log(g());
