// Matrizes exemplo
let A = [
    [1, 2],
    [3, 4]];

let B = [
    [5, 6],
    [7, 8]
];

let C = [];

// Loop para percorrer linhas de A
for (let i = 0; i < A.length; i++) {
    let linha = [];
    // Loop para percorrer colunas de B
    for (let j = 0; j < B[0].length; j++) {
        let soma = 0;
        // Loop para percorrer elementos da linha de A e coluna de B
        for (let k = 0; k < A[0].length; k++) {
            soma += A[i][k] * B[k][j];
        }
        linha.push(soma);
    }
    C.push(linha);
}

console.log("Multiplicação das Matrizes:");
console.log(C);
