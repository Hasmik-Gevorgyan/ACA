function checkPerfectSquare(number) {
    const sqrt = Math.sqrt(number);
    if (Number.isInteger(sqrt)) {
        return "Perfect square";
    } else {
        return "Not a perfect square";
    }
}

console.log(checkPerfectSquare(16));
console.log(checkPerfectSquare(25));
console.log(checkPerfectSquare(15));
