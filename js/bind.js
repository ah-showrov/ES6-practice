const roe = {
  id: 101,
  name: "roe",
  balance: 5000,
  treatDey: function (expense) {
    const result = this.balance - expense;
    return result;
  },
};
const roeTreatDey = roe.treatDey(500);
console.log(roeTreatDey);

const jho = {
  id: 102,
  name: "jho",
  balance: 4000,
};
const jhoTreatDey = roe.treatDey.bind(jho);
console.log(jhoTreatDey(1000));
