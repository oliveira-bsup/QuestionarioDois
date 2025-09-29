/*let letras = ['s','o','p','r','b','a'];
console.log(letras);

for(let i = 0 ; i < 6; i++){
    console.log(letras[i]);
}
console.log(letras[3]);
*/


   // console.log(letras2 [0][2]);


/* Percorrer matrix
console.log(letras2);
for(let l = 0; l < letras2.length; l++){
    for(let c = 0 ; c < letras2.length; c++){
        letras2[l][c] = true;
    }
};
console.log(letras2);
*/

//* Arrays - Bidirecionais
const letras2 =[['u','v','s','t','u'],
                ['b','a','c','f','g'],
                ['o','d','e','i','j'],
                ['l','m','n','o','p'],
                ['r','s','t','u','v'],];

for(let l = 0; l < letras2.length; l++){
       for(let c = 0; c < letras2.length; c++){
              letras2[l][c] = true;
        }
}
console.log(letras2);