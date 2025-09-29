//Atividade 11 - Calcular a massa corporal do individuo.
let prompt=require('prompt-sync')();

let altura = parseFloat(prompt('Digite sua altura em metros (Ex: 1.70): ' ));
let peso = Number (prompt('Digite seu peso em kg (70): '));

let cal_alltura = peso/(altura*altura);

console.log('\n --> Seu IMC e: ',cal_alltura.toFixed(2))
console.log('\n <<Aqui estão algumas informações sobre o IMC>>')
console.log('\n- Magreza: Abaixo de 18,5\n- Peso Normal: 18,5 a 24,9\n- Sobrepeso: 25,0 a 29,9\n- Obesidade: 30,0 a 39,9\n- Obesidade Grave: Acima de 40,0')