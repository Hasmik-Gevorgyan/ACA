function numberInput(text) {
    let inpNum;
    do {
        inpNum = +prompt(`Input value of ${text}`);
    } while (isNaN(inpNum));

    return inpNum;
}

function computeArea() {
    const figure = prompt("Input figure (rectangle or triangle):").toLowerCase();

    if(figure === "triangle") {
        const height = numberInput('height');
        const base = numberInput('base');

        if(height <= 0 || base <= 0) return 'Please enter only positives';

        return `Square of the triangle is ${(base * height) / 2}`
    }
    if (figure === "rectangle") {
        const height = numberInput('height');
        const width = numberInput('width');

        if(height <= 0 || width <= 0) return 'Please enter only positives';

        return `Square of the rectangle is ${width * height}`
       
    } 
}

console.log(computeArea())