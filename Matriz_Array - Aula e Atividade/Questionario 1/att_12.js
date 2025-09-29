let prompt=require('prompt-sync')();
let n1 = Number (prompt ('Digite um número: '));
let n2 = Number (prompt('Digite outro número: '));
console.log('\nEscolha o que você dejesa fazer: \n[1] Somar os número \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir')
switch (prompt('\nDigite uma das opções:')){
    case '1':
    console.log("Ultilizando Operador de Soma "+ (n1+n2));
    break;
    case '2':
    console.log("Ultilizando Operador de Subtração "+ (n1-n2));
    break;
    case '3':
    console.log("Ultilizando Operador de Multiplicação "+ (n1*n2));
    break;
    case '4':
    console.log("Ultilizando Operador de Divisão "+ (n1/n2));
    break;
    default:
    console.log('Erro, tente novamente.');   
}