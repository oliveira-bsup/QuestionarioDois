const prompt=require('prompt-sync')();
let nomes = ['leonardo','lucas','isabel','marcus','aline'];
let bsc = prompt("Digite um nome e vamos ver se está cadastrado: ");
for(let i = 0; i <= nomes.length;i++){
    if (nomes[i] == bsc){
        console.log("Achei!!!");
    }
    else{
        console.log("Não Achei");
    }
};

// nomes.sort() - coloca em ordem a array
console.log(nomes)









