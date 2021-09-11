const students1 = {
  name: "showrov",
  roll: 12,
};

const students2 = new Object();

class Students3 {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
}
const stu = new Students3("w", 5);
console.log(stu);

function students4(name, roll) {
  this.name = name;
  this.roll = roll;
}
const stu2 = new students4("z", 66);
console.log(stu2);

const students5 = Object.create(students1);
const { name, roll } = students5;
console.log(name, roll);
