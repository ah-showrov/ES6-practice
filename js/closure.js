/*
 function outerFun(num3) {
  let num1 = 10;
  return function (num2) {
    let sum = num1 + num2 + num3;
    return sum;
  };
}
const result = outerFun(12);
console.log(result(8));
 */
const Bank = (owner) => {
  let balance = 0; //for using closure balance get hided .it inclosed
  return {
    //for add multi return we used object . in object we used two function .
    deposit: (amount) => {
      return (balance += amount);
    },
    withdraw: (amount) => {
      return (balance -= amount);
    },
  };
};
const myBank = Bank("Royal");
console.log(myBank.deposit(300));
console.log(myBank.deposit(300));
console.log(myBank.withdraw(300));
console.log(myBank.balance); //can't access balance
