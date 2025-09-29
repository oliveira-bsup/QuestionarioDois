const letras2 =['b','d','a','c','e','o','w','l','m','n'];
let organizador = [];
console.log(`Original: ${letras2}`)
for(let i = 0; i <=letras2.length; i++){ 
    letras2.sort()
    letras2.reverse()
    organizador.push(letras2[i]);
    console.log(`Este é o que tem dentro do organizador: ${organizador}`);
    
    
    if (organizador.length == letras2.length){
    console.log(`Aqui está o inverso: ${organizador}`)}
}


console.log('acabou o codigo')
