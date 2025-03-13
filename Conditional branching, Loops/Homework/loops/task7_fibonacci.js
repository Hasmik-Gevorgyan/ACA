function fibonacci(number) {
    if(number <= 0) return "The number isn't valid.";
    if(number === 1) return [0];
    
    const fibonacciList = [0,1];

    for (let i = 2; i < number; i++) {
        fibonacciList.push(fibonacciList[i - 1] + fibonacciList[i - 2]);
    }
    return fibonacciList;

}

console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(2));
console.log(fibonacci(1));
