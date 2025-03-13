function numberInput(text) {
    let inpNum;
    do {
        inpNum = +prompt(`Input ${text}`);
    } while (isNaN(inpNum));

    return inpNum;
}

function createArray() {
    let size = numberInput("size");
    let arr = [];
    for (let i = 0; i < size; i++) {
        let element = numberInput(`element ${i + 1}:`);
        arr.push(element);
    }
    return arr;
}
console.log(createArray())
