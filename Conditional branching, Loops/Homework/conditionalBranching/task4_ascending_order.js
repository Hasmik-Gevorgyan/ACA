function ascendingOrder (num1, num2, num3) {
    const numbers = [num1, num2, num3];

    return numbers.sort((a,b) => a-b);
}

console.log(ascendingOrder(45 , 26, 78))
console.log(ascendingOrder(-23, -456, 0))
console.log(ascendingOrder(1111, 1, 23))