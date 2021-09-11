/* function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}
Person.prototype = {
  play() {
    console.log("Playing");
  },
  sleep() {
    console.log("sleeping");
  },
  run() {
    console.log("running");
  },
};

const royal = Person("Royal", 12);
console.log(royal); */
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const Royal = new Person("abcd", 12, "www");
console.log(Royal);
