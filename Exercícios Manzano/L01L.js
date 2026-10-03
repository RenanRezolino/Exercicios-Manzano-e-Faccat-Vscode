/* L01L
Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
soma dos quadrados dos três valores lidos.
*/

let valorA = Number(prompt("Digite o valor de A: "));
let valorB = Number(prompt("Digite o valor de B: "));
let valorC = Number(prompt("Digite o valor de C: "));

let quadradoA = valorA * valorA;
let quadradoB = valorB * valorB;
let quadradoC = valorC * valorC;
let resultado = quadradoA + quadradoB + quadradoC;

alert(`Quadrado de A: ${quadradoA}`);
alert(`Quadrado de B: ${quadradoB}`);
alert(`Quadrado de C: ${quadradoC}`);
alert(`Soma dos quadrados: ${resultado}`);