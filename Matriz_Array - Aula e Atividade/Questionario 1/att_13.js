let prompt=require('prompt-sync')();

let jogador1 = prompt("Digite seu nome, Jogador 1: ")
let jogador2 = prompt("Digite seu nome, Jogador 2: ")

let jogada1 = Math.floor(Math.random() * 6) + 1;
let jogada2 = Math.floor(Math.random() * 6) + 1;

console.log(`${jogador1} rolou um ${jogada1}`);
console.log(`${jogador2} rolou um ${jogada2}`);
if(jogada1 > jogada2){
    console.log(`${jogador1} é o Campeão!`)
}
else{
    console.log(`${jogador2} È o Camṕeão!`)
};
