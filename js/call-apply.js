const roe = {
  id: 101,
  name: "roe",
  balance: 5000,
  treatDey: function (expense) {
    const result = this.balance - expense;
    return result;
  },
};

const jho = {
  id: 102,
  name: "jho",
  balance: 4000,
};

const newTreat = roe.treatDey.call(jho, 500);
console.log(newTreat);

const newTreat2 = roe.treatDey.apply(jho, [400]);
console.log(newTreat2);
