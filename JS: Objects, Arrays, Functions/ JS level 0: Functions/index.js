// 1. Fix the Scope Issue

let message;
function greet() {
    message = "Hello, world!";
}
greet();
console.log(message);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Correct the Function to Return the Expected Value

function square(num) {
    return num * num;
}
console.log(square(4));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. Fix the Function to Handle Edge Case

function divide(a, b) {
    if (b === 0) {
        return "You cannot divide by 0!";
    }
    return a / b;
}
console.log(divide(10, 0));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4. Update the Function to Use Correct Parameter

function printAge(age) {
  console.log(age);
}
printAge(25);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. Resolve the Function Name Conflict

function calc(x = 10) {
  return x * x;
}
console.log(calc(5));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6. What will be logged?

let x = 10;
function test() {
  let x = 20;
}
test();
console.log(x); //10

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7. What will be logged?

console.log(add(10, 5)); // 15
function add(a, b) {
  return a + b;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 8. What will be logged?

let num = 30;
function showNum() {
  let num = 20;
  console.log(num);
}
showNum(); // What will be logged?: 20
console.log(num); // What will be logged?: 30

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9. What will be logged?

function outer() {
  let count = 1;
  function inner() {
    return count++;
  }
  return inner;
}
let counter = outer();
console.log(counter()); // What will be logged? : 1
console.log(counter()); // What will be logged? : 2

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 10. What will be logged?

(function immediate(number) {
  const message = "Number is: ";
  console.log(message + number);
})(5); // What will be logged? : Number is: 5

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 11. Write a Function to Calculate Factorial
// Write a function named factorial that takes a single number n and returns its factorial. The factorial of a number is the product of all positive integers less than or equal to n.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 12. Write a Function to Check Palindrome Strings
// Write a function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same backward as forward) and false otherwise.

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('madam'));

// 13. Leap Year Check
// Write a JavaScript function that determines whether a given year is a leap year or not. A leap year is a year that is divisible by 4 but not divisible by 100 unless it is also divisible by 400.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2025));

// 14. Power Calculation
// Write a JavaScript function that calculates the result of raising a given base to a given exponent (don’t use built-in operators).

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}
console.log(power(2, 3));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 15. What will be returned, and why?

(() => () => 1)() // Will return () => 1, outer function is a function that returns another function
