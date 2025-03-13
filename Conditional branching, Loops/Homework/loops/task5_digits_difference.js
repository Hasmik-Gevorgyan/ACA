function digitsDifference(number) {
    const digitList = `${Math.abs(number)}`.split('').map(d => +d);
    return Math.max(...digitList) - Math.min(...digitList)
}

console.log(digitsDifference(5));
console.log(digitsDifference(152));
console.log(digitsDifference(4593653));
console.log(digitsDifference(-4593653));
