function containsDigit(digit, number) {
    return String(number).includes(`${digit}`) ? "Yes" : 'No';
}

console.log(containsDigit(5, 2463))
console.log(containsDigit(4, 6))
console.log(containsDigit(8, 45689))