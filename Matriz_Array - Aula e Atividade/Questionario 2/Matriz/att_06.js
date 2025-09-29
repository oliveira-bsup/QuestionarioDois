const prompt=require('prompt-sync')();
/*
a) Imprimir todos os elementos da matriz;
b) Somar os quadrados de todos os elementos da primeira coluna;
c) Somar todos os elementos da terceira linha;
d) Somar os elementos da diagonal principal; e
e) Somar todos os elementos de índice par da segunda linha.
*/
let matriz = []
const tamanho = {linha:4, coluna:4}
let soma = {coluna1:0,coluna3:0,diagonal:0,element_par:0}

//----------------------Vai criar a <Matriz> - Etapa 1-----------------------------//
for(let c = 0; c <tamanho.coluna;c++){
    matriz[c] = []
    for(let l = 0; l < tamanho.linha; l++){
        let termin = parseInt(prompt(`Este numero vai ficar na posição:${l}º da coluna ${c}º `))
        while (isNaN (termin)){
            console.log('\nVocê Digitou algo que não é numero')
            termin = parseInt(prompt(`Este numero vai ficar na posição:${l}º da coluna ${c}º `))
        }
        matriz[c][l] = termin
    }
}
//-----------------------------------------------------------------------------------------------//


//-----menu-------------------------------menu-------------------------------------menu-------------------------------------------------------------------------------------------------------------------------------------------//

console.table('[1] Visualizar a matriz \n[2] Somar os quadrados de todos os elementos da primeira coluna\n[3] Somar todos os elementos da terceira linha\n[4] Somar os elementos da diagonal principal \n[5] Somar todos os elementos de índice par da segunda linha\n[6] Sair\n')
let menu = prompt('O que deseja fazer ? ')
while (isNaN(menu) || menu > 5 || menu < 1){
            console.log('\nVocê Digitou algo que não é numero')
            menu = parseInt(prompt(`\nDigte numero de [1] a [5] (somente numeros)`))
        }
//-----menu-------------------------------menu-------------------------------------menu-------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------MENU DAS OPÇÔES--------------------------------------//
switch(menu){
    case 1: // a) Imprimir todos os elementos da matriz;
        console.table(matriz)
        break;
    case 2: //b) Somar os quadrados de todos os elementos da primeira coluna;
        console.table(matriz)
        somac1(true)
        break;
    case 3://c) Somar todos os elementos da terceira linha;
        console.table(matriz)
        somac3()
        break;
    case 4://d) Somar os elementos da diagonal principal; e
        console.table(matriz)
        diagonal()
        break;
    case 5://e) Somar todos os elementos de índice par da segunda linha.
        console.table(matriz)
        elemento_par()
        break;
}
//------------------------------MENU DAS OPÇÔES--------------------------------------//

//------FUNÇÔES A BAIXO------////------FUNÇÔES A BAIXO------////------FUNÇÔES A BAIXO------//

// Soma da 1ª Coluna - (indice 0) 
function somac1(a){
for(let i = 0 ; i <matriz.length;i++){
    let elemento = matriz[i][0];
    soma.coluna1 += elemento;}
    return console.log(`Aqui está soma da coluna 1: ${soma.coluna1}`)
}

// Soma da 3ª Coluna - (indice 2)
function somac3(b){
for(let j = 0 ; j <matriz.length;j++){
    let teste = matriz[j][2];
    soma.coluna3 += teste;}
    console.log(`Aqui está soma da 3ª coluna: ${soma.coluna3}`)
}

//Diagonal e soma - (Quando os indice for igual -  no caso [i][i])
function diagonal(c){
    for(let i = 0 ; i < matriz.length; i++){
    let elemento = matriz[i][i];
    soma.diagonal += elemento;}
    console.log(`Aqui da Diagonal principal é: ${soma.diagonal}`);
}

// Todo INDICE que for PAR ele pega e guarda em uma varivel (soma.element_par) e soma com os outros indice PAR
function elemento_par(d){
    for(let i = 0 ; i < matriz.length; i++){
        if(i % 2 == 0){
        let elemento = matriz[1][i];
        soma.element_par += elemento;}}
    console.log(`Aqui a soma dos indice par: ${soma.element_par}`)
}



