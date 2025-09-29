const numeroOriginal = "745";
function inverteString(str) {
  const caracteres = str.split("");
  const arrayInvertido = caracteres.reverse();
  const stringInvertida = arrayInvertido.join("");
  return stringInvertida;
}
const numeroInvertido = inverteString(numeroOriginal);
console.log(numeroInvertido);
















