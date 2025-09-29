//Atividade Matriz  - Atividade 03
let transposta = []
const tamanho = {linha:5, coluna:5}

for(let i = 0 ; i < tamanho.linha; i++){
    matriz[i] = [];
for(let j = 0; j < tamanho.coluna;j++)
    {matriz[i][j] = Math.floor(Math.random() * 100)+1}
}
console.log('Matriz original:')
console.table(matriz)

for(let j = 0; j < tamanho.coluna-0;j++){
    linha = []
    for(let i = 0 ; i < tamanho.linha-0; i++){
        linha.push(matriz[i][j])  
    }
    transposta.push(linha)
}

console.log('\nMatriz transposta')
console.table(transposta)