let acao = prompt('Deseja fazer uma lista de quantos numero ? ')
let vetor = []
let vetor2 = []


for(let i = 0; i < acao; i++){

    let digite = parseInt(prompt(`Digite o ${i+1}º número: `));

    let lancador = adiciona_vetor(digite);
}

function adiciona_vetor(num){
    if (num % 2 ==0){
    v_pares.push(num)
    }
    else{
        v_impares.push(num)
    }
}