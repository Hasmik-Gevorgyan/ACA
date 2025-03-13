function sumDigits(num) {
    if(typeof num !== "number") return "Input number is invalid";
    if(num > 9999 || num < 1000) return "Inputed number isn't four-digit";

    const firstTwoSum = Math.floor(num / 1000) + Math.floor((num % 1000) / 100);
    const lastTwoSum = Math.floor((num % 100) / 10) + (num % 10);

    return [firstTwoSum, lastTwoSum];
}

console.log(sumDigits(1234))
console.log(sumDigits(1001))
console.log(sumDigits(8000))
console.log(sumDigits('8000'))
console.log(sumDigits(27958))