// Array of numbers 1 through 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. Array of odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// b. Array of numbers divisible by 2 or 5
const divisibleBy2Or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Numbers divisible by 2 or 5:", divisibleBy2Or5);

// c. Array of numbers divisible by 3, squared
const squaredDivBy3 = numbers
    .filter(num => num % 3 === 0)   // Filter numbers divisible by 3
    .map(num => num ** 2);           // Square the numbers
console.log("Numbers divisible by 3, squared:", squaredDivBy3);

// d. Sum of squares of numbers divisible by 5
const sumOfSquaresDivBy5 = numbers
    .filter(num => num % 5 === 0)   // Filter numbers divisible by 5
    .map(num => num ** 2)            // Square the numbers
    .reduce((sum, num) => sum + num, 0); // Sum the squared numbers
console.log("Sum of squares of numbers divisible by 5:", sumOfSquaresDivBy5);
