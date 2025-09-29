const prompt=require('prompt-sync')();
let vetor = [];

for(let i = 0; i <= 3; i++){
    let nomes = prompt(`Digite o ${i++}° nome: `);
    vetor[i] = nomes;
}

let procura = prompt('Digite um nome que voce deseja procurar: ')
for(let i = 0 ; i <=3; i++){
    if (procura == vetor[i]){
        console.log('Achei!')
    }
    else{
        console.log('não achei')
    }
}
