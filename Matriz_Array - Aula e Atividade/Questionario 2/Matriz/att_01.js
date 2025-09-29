let MAT = []
const tamanho = {linha:10, coluna:15}

// i = indice da linha  - MAT[i] = [] Cria uma nova linha
// j = indice da coluno - {MAT[i][j] = Math.floor(Math.random() * 100)+1} - Gera um numero aleatorio e adiciona na linha[i] na coluna [j]
for(let i = 0 ; i < tamanho.linha; i++){
    MAT[i] = [];
for(let j = 0; j < tamanho.coluna;j++)
    {MAT[i][j] = Math.floor(Math.random() * 100)+1}
}

console.log('\nAqui está a Matriz etapa 1:')
console.table(MAT)

// soma  - pega o numero que está na linha [i] e 
console.log('\nAqui está etapa 2 - Soma dos elemementos por linha:')

for(let i = 0  ; i<tamanho.linha;i++){
    let somaLinha = 0;
for(let j = 0 ; j < tamanho.coluna; j++){
    somaLinha += MAT[i][j]}
    const parOUimpar = somaLinha % 2 == 0 ? "par" : "impar";
    console.log(`Coluna ${i+1}: Soma = ${somaLinha} (${parOUimpar})`)
}


console.log('\nAqui está etapa 3 - Soma dos elementos por Coluna:')
for(let j = 0  ; j<tamanho.coluna;j++){
    let somaLinha = 0;
for(let i = 0 ; i < tamanho.linha; i++){
    somaLinha +=MAT[i][j];}
    const parOUimpar = somaLinha % 2 == 0 ? "par" : "impar";
    console.log(`Linha ${j+1}: Soma = ${somaLinha} (${parOUimpar})`)
}
console.table(MAT)