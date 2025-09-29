let prompt = require('prompt-sync')();

const tamanho = { linha: 5, coluna: 5 }
let matriz = []
let tentativas = 10
let totalNavios = 3
let acertos = 0

//----------------------Vai criar a <Matriz> - Etapa 1-----------------------------//
for (let l = 0; l < tamanho.linha; l++) {
    matriz[l] = []
    for (let c = 0; c < tamanho.coluna; c++) {
        matriz[l][c] = ' ~ ' // Representa água
    }
}
//-----------------------------------------------------------------------------------------------//

//----------------------Vai posicionar os navios - Etapa 2-----------------------------//
let naviosRestantes = totalNavios
while (naviosRestantes > 0) {
    let linhaNavio = Math.floor(Math.random() * tamanho.linha)
    let colunaNavio = Math.floor(Math.random() * tamanho.coluna)
    if (matriz[linhaNavio][colunaNavio] === ' ~ ') {
        matriz[linhaNavio][colunaNavio] = ' N ' // Representa um navio
        naviosRestantes--
    }
}
//-----------------------------------------------------------------------------------------------//

console.log("Bem-vindo ao jogo Batalha Naval!")
console.log(`Você tem ${tentativas} tentativas para acertar os ${totalNavios} navios inimigos.`)
console.log("A matriz é representada por '~' para água, 'O' para erro e 'X' para acertos.")

//----------------------Início do jogo - Etapa 3-----------------------------//
while (tentativas > 0 && acertos < totalNavios) {
    // Exibe matriz sem mostrar navios
    let matrizExibicao = matriz.map(linha => linha.map(celula => (celula === ' N ' ? ' ~ ' : celula)))
    console.table(matrizExibicao)

    let linhaJogador = parseInt(prompt(`Digite a linha (0-${tamanho.linha - 1}): `))
    let colunaJogador = parseInt(prompt(`Digite a coluna (0-${tamanho.coluna - 1}): `))

    if (isNaN(linhaJogador) || isNaN(colunaJogador) ||
        linhaJogador < 0 || linhaJogador >= tamanho.linha ||
        colunaJogador < 0 || colunaJogador >= tamanho.coluna) {
        console.log("Coordenadas inválidas. Tente novamente.")
        continue
    }

    if (matriz[linhaJogador][colunaJogador] === ' N ') {
        console.log("Acertou um navio!")
        matriz[linhaJogador][colunaJogador] = ' X ' // Representa um acerto
        acertos++
    } else if (matriz[linhaJogador][colunaJogador] === ' ~ ') {
        console.log("Água! Tente novamente.")
        matriz[linhaJogador][colunaJogador] = ' O ' // Representa uma tentativa na água
    } else {
        console.log("Você já tentou essa posição. Tente outra.")
        continue
    }
    tentativas--
    console.log(`Tentativas restantes: ${tentativas}`)
}
//-----------------------------------------------------------------------------------------------//

//----------------------Fim do jogo - Etapa 4-----------------------------//
if (acertos === totalNavios) {
    console.log("Parabéns! Você afundou todos os navios inimigos!")
} else {
    console.log("Fim de jogo! Você não conseguiu afundar todos os navios.")
}
// Exibe matriz final mostrando navios não encontrados
let matrizFinal = matriz.map(linha => linha.map(celula => (celula === ' N ' ? ' N ' : celula)))
console.table(matrizFinal)
//-----------------------------------------------------------------------------------------------//
