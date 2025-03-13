function sumOfN(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        sum += (i - 1) * i;
    }
    
    return sum;
}

console.log(sumOfN(3))
console.log(sumOfN(8))
console.log(sumOfN(0))


