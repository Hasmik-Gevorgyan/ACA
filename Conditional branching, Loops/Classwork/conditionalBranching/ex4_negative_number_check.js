function isNegative(num) {
    if(typeof num !== 'number') return "Isn't number";
    if(num !== num) return "Imported number is a NaN";
    return num < 0 ? "yes" : "no";
}

console.log(isNegative(11))
console.log(isNegative(-5))
console.log(isNegative(0))
console.log(isNegative(''))
console.log(isNegative(NaN))