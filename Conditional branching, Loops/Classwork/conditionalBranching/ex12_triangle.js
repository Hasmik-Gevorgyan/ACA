function checkTriangle(angle1, angle2, angle3) {
    if(angle1 + angle2 + angle3 !== 180) return "Invalid triangle angles.";
    if (angle1 < 90 && angle2 < 90 && angle3 < 90) return "Acute triangle";
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) return "Right triangle";
    if (angle1 > 90 || angle2 > 90 || angle3 > 90) return "Obtuse triangle";
}

console.log(checkTriangle(60,60,60));
console.log(checkTriangle(90,45,45));
console.log(checkTriangle(100,40,40));
console.log(checkTriangle(100,100,40));

