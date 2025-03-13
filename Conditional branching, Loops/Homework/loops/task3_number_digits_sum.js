function sumOfDigits(number) {
    return String(Math.abs(number)).split('').reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(2)); 
console.log(sumOfDigits(25)); 
console.log(sumOfDigits(895796));
console.log(sumOfDigits(-96));
