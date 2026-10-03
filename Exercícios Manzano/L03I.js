/* L03I
Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do 
somatório e a média aritmética dos valores lidos. 
*/

let contador = 1;
let soma = 0;

while (contador < 11) {
    let valor = Number(prompt(`Digite o ${contador}º valor: `));
    soma = soma + valor;
    contador++;
}

let media = soma / 10;

console.log(`Somatório: ${soma.toFixed(2)}`);

console.log(`Média aritmética: ${media.toFixed(2)}`);