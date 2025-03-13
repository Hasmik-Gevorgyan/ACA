function countDigitOccurrences(num, digit) {
    return `${num}`.split(`${digit}`).length - 1;
}

console.log(countDigitOccurrences(112233, 2));
console.log(countDigitOccurrences(112223963, 2));
console.log(countDigitOccurrences(800007000087, 8));
console.log(countDigitOccurrences(800007000087, 7));
console.log(countDigitOccurrences(800007000087, 0));
