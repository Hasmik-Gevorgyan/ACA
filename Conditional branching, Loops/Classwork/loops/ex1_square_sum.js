function sumOfSquares(n) {
    if (n <= 0) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}

console.log(sumOfSquares(5));
console.log(sumOfSquares(3));
