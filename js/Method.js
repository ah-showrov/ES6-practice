const Student = {
  name: "x",
  id: 012,
  money: 3000,
  friends: ["a", "b", "c"],
  treat: function () {
    const ha = this.money - 2000;
    return ha;
  },
  abrTreatDey: function (expense) {
    this.money = this.money - expense;
    return this.money;
  },
};
// const restMoney = Student.treat();
// console.log(restMoney);
// Object ar property ar modde j function golo thake segolo k method bola hoi

const restMoney = Student.abrTreatDey(500);
console.log(restMoney);
