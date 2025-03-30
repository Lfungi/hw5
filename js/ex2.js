const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

const divisibleBy2Or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Numbers divisible by 2 or 5:", divisibleBy2Or5);

const squaredDivBy3 = numbers
  .filter(num => num % 3 === 0)
  .map(num => num ** 2);
console.log("Numbers divisible by 3, squared:", squaredDivBy3);

const sumOfSquaresDivBy5 = numbers
  .filter(num => num % 5 === 0)
  .map(num => num ** 2)
  .reduce((sum, num) => sum + num, 0);
console.log("Sum of squares of numbers divisible by 5:", sumOfSquaresDivBy5);
