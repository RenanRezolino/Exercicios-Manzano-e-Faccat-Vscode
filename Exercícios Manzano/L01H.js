/* L01H
 Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
VOLUME  COMPRIMENTO * LARGURA * ALTURA. 
*/

let comprimento = Number(prompt("Digite o comprimento: "));
let largura = Number(prompt("Digite a largura: "));
let altura = Number(prompt("Digite a altura: "));
let volume = comprimento * largura * altura;

alert(`Comprimento: ${comprimento.toFixed(2)}`);
alert(`Largura: ${largura.toFixed(2)}`);
alert(`Altura: ${altura.toFixed(2)}`);
alert(`Volume da caixa: ${volume.toFixed(2)}`);