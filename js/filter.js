const Numbers = [45, 33, 22, 66, 55, 42, 78, 65, 12, 39, 57, 52];
// Get odd numbers
const OddNum = Numbers.filter(function (odd) {
  return odd % 2;
  //   return odd % 2 != 0;
  //   return odd % 2 == 0;
});
console.log(OddNum);

const OddNumber = Numbers.filter((num) => num % 2);
// const OddNumber = Numbers.filter((num) => num % 2 != 0);
// const OddNumber = Numbers.filter((num) => num % 2 == 0);
console.log(OddNumber);

const numbers = [15, 23, 10, 27, 32, 12, 30, 44];
const largestNumber = [];
const largest = (number) => {
  if (number > 30) {
    largestNumber.push(number);
  }
};
for (let i = 0; i < numbers.length; i++) {
  largest(numbers[i]);
}

console.log(largestNumber);

const numbers2 = [5, 4, 7, 8, 3, 2, 1];
const largest1 = numbers2.filter((number) => number > 4);

console.log(largest1);
