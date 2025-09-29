// Matrizes exemplo 2x2
let A = [
    [1, 2],
    [3, 4]
];

let B = [
    [5, 6],
    [7, 8]
];

let C = [];

// Loop para percorrer linhas
for (let i = 0; i < A.length; i++) {
    let linha = []; // nova linha da matriz resultado
    // Loop para percorrer colunas
    for (let j = 0; j < A[0].length; j++) {
        linha.push(A[i][j] + B[i][j]); // soma elemento a elemento
    }
    C.push(linha);
}

console.log("Soma das Matrizes:");
console.log(C);
