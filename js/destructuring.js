const person = {
  A: { id: 002, name: "henry", age: "43" },
  B: { id: 004, name: "jho", age: "54" },
  C: { id: 003, name: "joe", age: "34" },
};

const { id, name } = person.B;
console.log(id, name);
console.log(`this is ${name}`);
