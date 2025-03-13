const a1 = numberInput("a1");
const a2 = numberInput("a2");
const n = numberInput("n");

function numberInput(text) {
    let inpNum;
    do {
        inpNum = +prompt(`Input value of ${text}`);
    } while (isNaN(inpNum));

    return inpNum;
}

const an = a1 + (n - 1) * (a2 - a1);

console.log(an);
