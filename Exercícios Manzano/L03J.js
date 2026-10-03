/* L03J
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
pares situados na faixa numérica de 50 a 70. 
*/

let contador = 50;
let soma = 0;
let quantidade = 0;

while (contador < 71) {
    if (contador % 2 == 0) {
        soma = soma + contador;
        quantidade++;
    }
    contador++;
}

let media = soma / quantidade;
console.log(`Soma dos números pares: ${soma}`);
console.log(`Média dos números pares: ${media.toFixed(2)}`);