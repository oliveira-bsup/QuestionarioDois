// Atividade 05 - Leia 5 Numero e Imprima a Média entre eles.
let prompt=require('prompt-sync')();

let n1 = Number (prompt('Digite a nota da atividade 1: '));
let n2 = Number (prompt('Digite a nota da atividade 2: '));
let n3 = Number (prompt('Digite a nota da atividade 3: '));
let n4 = Number (prompt('Digite a nota da atividade 3: '));
let n5 = Number (prompt('Digite a nota da atividade 3: '));

let total_notas = ((n1+n2+n3+n4+n5) /3);

console.log("Média dos números que voce digitou é: "+ total_notas.toFixed(2))