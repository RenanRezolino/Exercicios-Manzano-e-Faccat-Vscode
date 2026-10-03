/* L01M 
Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o 
quadrado da soma dos três valores lidos. 
*/

let valorA = Number(prompt("Digite o valor de A: "));
let valorB = Number(prompt("Digite o valor de B: "));
let valorC = Number(prompt("Digite o valor de C: "));
let soma = valorA + valorB + valorC;
let resultado = soma * soma;

alert(`Valor de A: ${valorA}`);
alert(`Valor de B: ${valorB}`);
alert(`Valor de C: ${valorC}`);
alert(`Soma dos valores: ${soma}`);
alert(`Quadrado da soma: ${resultado}`);