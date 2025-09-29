let vetor = [2,53,6,54,32,31,65,43,87,4,22,];
let par_impar = [];

for(let i = 0;i <vetor.length; i++ ){
    let lancador = primos(i); // Pega o INDICE(i) e envia para a função
    if (lancador == 'par'){//Se retornar 'par' na varivel "Lançador" é verdadeiro
        let div = vetor[i]/2;//Pega o Elemento que está no vetor[i] e divide por 2
        par_impar.push(div)//Após fazer a operação matematica com o Elemento ele envia para a Array vazia chamada "par_impar"
        console.log(`<Indice - PAR>`)
        console.log(`\nIndice: ${i}º\nTipo do Indice: ${lancador}\nContem o elemento: ${vetor[i]}\nFoi DIVIDO POR 2, o resultado foi: ${div}`)
        console.log('-----------------------------------------')
    }
    else{
        let div = vetor[i]*3;
        par_impar.push(div)
        console.log(`<Indice: IMPAR>`)
        console.log(`\nIndice: ${i}º\nTipo: ${lancador}\nContem o elemento: ${vetor[i]}\nFoi MULTIPLICADO POR 3\nValor Adicionado: ${div}`)
        console.log('-----------------------------------------')

    }
}

//Função reutilizada do questionario 1 - ATIVIDADE 01.
//É chamada quando o indice precisa ser verificado se é par ou impar
function primos(cond){
    if(cond % 2 === 0)
        {return 'par'}
    else{
        return 'impar'
    }
}
