function shapeA (n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        const row = [];
        for(let j = 0; j < n; j++) {
            if(j <= i){
                row.push('*')
            } else {
                row.push(' ')
            }
        }
        arr.push(row)
    }
    return arr;
}

function shapeB (n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        const row = [];
        for(let j = 0; j < n; j++) {
            if(n -i -1 >= j){
                row.push('*')
            } else {
                row.push(' ')
            }
        }
        arr.push(row)
    }
    return arr;
}

function shapeC (n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        const row = [];
        for(let j = 0; j < n; j++) {
            if(j >= i){
                row.push('*')
            } else {
                row.push(' ')
            }
        }
        arr.push(row)
    }
    return arr;
}

function shapeD (n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        const row = [];
        for(let j = 0; j < n; j++) {
            if(n -i -1 >= j){
                row.push('*')
            } else {
                row.push(' ')
            }
        }
        arr.push(row)
    }
    return arr;
}

console.log(shapeA(10));
console.log(shapeB(10));
console.log(shapeC(10));
console.log(shapeD(10));