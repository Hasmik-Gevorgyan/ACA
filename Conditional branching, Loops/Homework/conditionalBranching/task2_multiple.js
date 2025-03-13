function multiples(num) {
    const multiplesNum = [];

    if (num % 3 === 0) multiplesNum.push('3');
    if (num % 5 === 0) multiplesNum.push('5');
    if (num % 7 === 0) multiplesNum.push('7');

    if(!multiplesNum.length) return `${num} is not a multiple of 3, 5 or 7.`;

    return `${num} is a multiple of ${multiplesNum.join(' and ')}.`
}

console.log(multiples(21))
console.log(multiples(35))
console.log(multiples(13))
console.log(multiples(24))
console.log(multiples(420))