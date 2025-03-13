function even_odd(num) {
    if(typeof num !== 'number') return "Isn't number";
    if(num % 2 === 0) return 'Even';
    return "Odd";
}

console.log(even_odd(123))
console.log(even_odd(35))
console.log(even_odd(288))