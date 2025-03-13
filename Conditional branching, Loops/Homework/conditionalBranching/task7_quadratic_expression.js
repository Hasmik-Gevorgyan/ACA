function solveQuadraticExpression(a,b,c) {
    if(a === 0) return "Enter valid constants";
	const d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return "Solution does not exists";
    } else if (d === 0) {
        const x0 = -b / (2 * a);
        return `Solution is ${x0}`;
    } 
	const x0 = (-b + Math.sqrt(d)) / (2 * a);
	const x1 = (-b - Math.sqrt(d)) / (2 * a);

	return `Solutions are ${x0} and ${x1}`;
}


console.log(solveQuadraticExpression(1, 2, 1))
console.log(solveQuadraticExpression(0, 4, -5))
console.log(solveQuadraticExpression(3, -8, 12))
console.log(solveQuadraticExpression(5, -13, 6))