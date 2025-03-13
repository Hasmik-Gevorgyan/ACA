function tableOfCubes(X, Y, A) {
    if(X > Y || A === 0) return null;
    for (let i = X; i <= Y; i++) {
        if (i % A === 0) {
            console.log(i + "^3 = " + (i * i * i));
        }
    }
}

tableOfCubes(1, 10, 2);
tableOfCubes(-1, 10, 2);
