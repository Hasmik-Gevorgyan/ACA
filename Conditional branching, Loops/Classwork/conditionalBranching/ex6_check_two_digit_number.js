function checkTwoDigitNumber(num) {
    num = Math.abs(num);

    if (num < 10 || num > 99) {
        return "Number isn't two digit";
    }

    const firstDigit = Math.floor(num / 10);
    const secondDigit = num % 10;

    return firstDigit > secondDigit ? "yes" : "no";
}

console.log(checkTwoDigitNumber(12));
console.log(checkTwoDigitNumber(0));
console.log(checkTwoDigitNumber(86));
console.log(checkTwoDigitNumber(-73));
