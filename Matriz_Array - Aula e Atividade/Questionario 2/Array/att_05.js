const prompt=require('prompt-sync')();
let vetor1 = []
let vetor2 = []
let v_diferente = []
let v_soma = []
let v_mult = []

for(let i = 0;i < 4;i++){
    let digite = parseInt(prompt(`Digite o ${i+1}º número: `))
    vetor1.push(digite)
    console.log(vetor1)
}
for(let i = 1; i <= vetor1.length;i++){
    console.log('segundo vetor: ')
    let digite = parseInt(prompt(`Digite o ${i++}º número: `))
    vetor2.push(digite);
    console.log(vetor1,vetor2)
    }
for(let i = 1; i <= vetor1.length;i++)
    {v_diferente.push(vetor1.filter(elemento => !vetor2.includes(elemento)));}
    console.log(`\nAqui está a diferença dos dois vetores${v_diferente}`)

for(let i = 1 ; i < vetor1.length; i++){
    let soma = vetor1[i] + vetor2[i]
    v_soma.push(soma)}
    console.log(`\nAqui está os dois vetores somados: ${v_soma}`)

for(let i = 1 ; i < vetor1.length; i++){
    let mult = vetor1[i] * vetor2[i];
    v_mult.push(mult)}
    console.log(`\nAqui está os dois vetores multiplicado: ${v_mult}`)
