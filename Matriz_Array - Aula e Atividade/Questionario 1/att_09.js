//Atividade 09 - Calculo de Notas do Aluno.
let prompt=require('prompt-sync')();

let n1 = Number (prompt('Digite a nota da atividade 1: '));
let n2 = Number (prompt('Digite a nota da atividade 2: '));
let n3 = Number (prompt('Digite a nota da atividade 3: '));

let total_notas = ((n1+n2+n3) /3);

if(total_notas >= 7){
    console.log('Parabéns!\nVocê foi aprovado!')

}
else{
    console.log("Infelizmente você foi reprovado")
}
    console.log("Sua média foi: "+ total_notas.toFixed(2))