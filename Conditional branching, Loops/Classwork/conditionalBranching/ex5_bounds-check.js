function checkBounds(num1, num2, num3) {
    if (num3 >= num1 && num3 <= num2) {
        return "In bounds";
    } else {
        return "Out of bounds";
    }
}


console.log(checkBounds(-12, 9, 13))
console.log(checkBounds(0,15,8));
console.log(checkBounds(10,19,9));
