function reverseNumber(number) {
    const str = `${Math.abs(number)}`;
    if(str.length === 1) return number;
    return +(str.slice(-1) + str.slice(1,-1) + str[0]);
}

console.log(reverseNumber(2))
console.log(reverseNumber(13))
console.log(reverseNumber(895796))
console.log(reverseNumber(-895796))