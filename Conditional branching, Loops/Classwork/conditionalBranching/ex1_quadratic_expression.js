const a = numberInput('a');
const b = numberInput('b');
const c = numberInput('c');
const x0 = numberInput('x0');

function numberInput(text) {
    let inpNum;
    do {
        inpNum = +prompt(`Input value of ${text}`);
    } while (isNaN(inpNum));

    return inpNum;
}

function calcQuadraticExpression(a,b,c,x0) {
	return a * x0 ** 2 + b * x0 + c;
}

console.log(calcQuadraticExpression(a,b,c,x0))
