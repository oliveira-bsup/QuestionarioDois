//Atividade Matriz  - Atividade 02
let fifit = []
let diagonal = []
const tamanho = {linha:5, coluna:5}

// i = indice da linha  - MAT[i] = [] Cria uma nova linha
// j = indice da coluno - {MAT[i][j] = Math.floor(Math.random() * 100)+1} - Gera um numero aleatorio e adiciona na linha[i] na coluna [j]
for(let i = 0 ; i < tamanho.linha; i++){
    fifit[i] = [];
for(let j = 0; j < tamanho.coluna;j++)
    {fifit[i][j] = Math.floor(Math.random() * 100)+1}
}
console.log('Aqui está a Matriz orinal:')
console.table(fifit)

for(let i = 0 ; i < tamanho.linha; i++){
    let elemento = fifit[i][i]
    diagonal.push(elemento)
}

console.log('\nAqui está apenas os numeros na diagonal da matriz:')
console.log(diagonal)