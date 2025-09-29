const prompt=require('prompt-sync')();

let Vetor = []; // Cria um vetor Vazio

for (let i = 1; i <=10; i++){ //Repete até Armazenar 10 numeros, sempre acrescentando +1
    let num = parseInt(prompt('Digite o numero: ')); // Recebe um numero e converte ele para o TIPO INTEIRO
    Vetor[i] = num; // Armazena o numero no VETOR
    console.log(i + "/10"); //mostra o Indice 
}
console.log('Vetor na ordem direta: '); // Mostra todos os numeros armazenado na ordem direta
for (let i = 1; i <=10; i++){
    console.log(`${Vetor[i]}`);
}

console.log('Vetor na ordem inversa: ')// Mostra os dados dentro da Variavel 
    for(var i = 10; i>=1;i--){//Imprime de Baixo para Cima
    console.log(Vetor[i])
}



let contador = 1
while(contador < Vetor.length){
    console.log(contador)
    contador++
}





