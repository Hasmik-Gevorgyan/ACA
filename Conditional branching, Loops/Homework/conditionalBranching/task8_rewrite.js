// let n = +prompt();

// const i = 0;
// const j = 0;

// if(n % 2 === 0) {
//     if(!Math.floor(n/10)) {
//         i += 1;
//     }
// }

// if(n % 3 === 0) {
//     if(n % 10 === 0) {
//         j += 1;
//     }
// }


let n = +prompt();

const i = 0;
const j = 0;

if(n % 2 === 0 && Math.floor(n/10)) {
    i += 1;
}

if(n % 3 === 0 && n % 10 === 0) {
    j += 1;
}