const prompt=require('prompt-sync')();
let acao = prompt('Deseja fazer uma lista de quantos numero ? ')
let vetor = []
let v_pares = []
let v_impares = []

for(let i = 0; i < acao; i++){
    let digite = parseInt(prompt(`Digite o ${i+1}º número: `));
    /*if(isNaN(digite)){
        digite = prompt('isso nao é um numero, digite um numero: ')
        let lancador = adiciona_vetor(digite);
    }
    else{*/// Melhorar - Se o usuario não digitar nada
    let lancador = adiciona_vetor(digite);
}

if (v_impares.length + v_pares.length == acao){

    v_pares.sort()
    vetor.push(v_pares)
    console.log(`\nNúmeros PARES em ordem crescente ${vetor}`)
   
    v_impares.sort()
    v_impares.reverse()
    vetor.push(v_impares)
    console.log(`\nNúmeros IMPARES em ordem decrescente ${v_impares}`)
   
    console.log(`\nTodos organizados: ${vetor}`) 
}

function adiciona_vetor(num){
    if (num % 2 ==0){
    v_pares.push(num)
    }
    else{
        v_impares.push(num)
    }
}





