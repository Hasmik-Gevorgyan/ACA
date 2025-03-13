function productSum(number) {
    const digitsList = `${Math.abs(number)}`.split('').map(d => +d);

    const product = digitsList.reduce((prod, digit) => prod * digit, 1);
    const sum = digitsList.reduce((sum, digit) => sum + digit, 0);

    return ( isNaN(product % sum) ?
            'Cannot calculate.'
        :
            product % sum === 0 ?
                `Quotient is ${product / sum}.`
            :
                `Remainder is ${product % sum}.`
    )
}

console.log(productSum(1233)); 
console.log(productSum(5)); 
console.log(productSum(455)); 
console.log(productSum(0)); 